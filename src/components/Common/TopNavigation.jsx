import React from "react";
import { GoogleLogin } from "react-google-login";
import { useStoreActions, useStoreState } from "easy-peasy";
import { exchangeGoogleAccessToken } from "../../services/userService";

const SvgIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 block mr-5"
      viewBox="0 0.003 421 274.997"
    >
      <g fill="url(#logoMarkGradient)" fillRule="evenodd">
        <path d="M385.872 204.488c-19.401 0-35.171 15.769-35.171 35.127 0 19.359 15.77 35.15 35.17 35.15 19.338 0 35.129-15.791 35.129-35.15 0-19.358-15.791-35.127-35.128-35.127M264.25 202.01l-3.505 1.41c-2.372 0-4.167-.62-5.342-1.902-1.175-1.303-2.265-4.017-3.42-8.205L218.247 64.169h-65.94l-30.918 129.144c-1.068 4.55-2.287 7.543-3.697 8.889l-4.98 2.094c-4.251 0-7.456-3.653-9.486-10.982L60.427 64.169H0l56.666 168.503c3.44 9.979 7.179 17.969 11.154 23.889 3.996 5.918 9.444 10.448 16.346 13.674C91.132 273.398 99.87 275 110.555 275c27.799 0 45.534-14.486 53.098-43.504l22.885-87.627 23.995 86.217c2.628 9.039 6.24 16.9 10.748 23.547 4.51 6.623 10.172 11.88 16.967 15.684 6.857 3.78 14.893 5.684 24.059 5.684 6.262 0 12.842-1.795 19.766-5.363 6.9-3.547 13.332-8.803 19.273-15.812 5.918-6.987 10.49-15.085 13.652-24.337L393.63.005H334.55l-66.966 195.297c-1.22 3.609-2.48 5.767-3.334 6.708" />
        <path d="M385.872 274.766c-19.401 0-35.171-15.791-35.171-35.15 0-19.358 15.77-35.127 35.17-35.127 19.338 0 35.129 15.769 35.129 35.127 0 19.359-15.791 35.15-35.128 35.15" />
      </g>
      <defs>
        <linearGradient x1="0%" y1="0%" y2="100%" id="logoMarkGradient">
          <stop stopColor="#2298BD"></stop>
          <stop offset="1" stopColor="#0ED7B5"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

const TopNavigation = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const setGoogleUser = useStoreActions(
    (action) => action.googleUser.setGoogleUser
  );
  const setLoggedIn = useStoreActions((action) => action.setLoggedIn);
  const googleUser = useStoreState((state) => state.googleUser);

  const getToken = async (response) => {
    const data = await exchangeGoogleAccessToken(response.accessToken);
    setGoogleUser({
      profileObj: response.profileObj,
      accessToken: response.accessToken,
    });
    setLoggedIn(true);
    localStorage.setItem("accessToken", data.access_token);
  };

  return (
    <div className="flex items-center pl-6 pr-6 w-full bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16">
      <div className="flex-1 flex">
        <a href="/" className="block">
          <SvgIcon />
        </a>
        <h5 className="text-2xl">webosium</h5>
      </div>
      <div>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID_GOOGLE}
          onSuccess={getToken}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          isSignedIn
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="bg-blue-700 px-3 py-2 rounded-full text-xs text-white"
            >
              {googleUser.FName ? (
                <p className="flex items-center truncate">
                  <img
                    src={googleUser.image}
                    className="w-5 h-5 md:w-6 md:h-6 mr-2 rounded-full"
                    alt="user"
                  />
                  {googleUser.FName} {googleUser.LName}
                </p>
              ) : (
                "Sign-In with Google"
              )}
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default TopNavigation;
