import React from "react";
import { GoogleLogin } from "react-google-login";
import { useStoreActions, useStoreState } from "easy-peasy";
import { exchangeGoogleAccessToken } from "../../services/userService";
import { Link } from "react-router-dom";

const SvgIcon = () => {
  return (
    <svg
      className="w-8 h-8 block mr-5"
      viewBox="0 0 313 292"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Group 41</title>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stopColor="#00A7BC" offset="0%"></stop>
          <stop stopColor="#00BDBA" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-2"
        >
          <stop stopColor="#00A7BC" offset="0%"></stop>
          <stop stopColor="#00BDBA" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="Mobile-Application"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-41" transform="translate(1.000000, 29.000000)">
          <g
            id="Group-40"
            transform="translate(28.969482, 0.000000)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="57"
          >
            <path
              d="M254,-3.0127012e-12 L254,154 C250.923074,206.875773 228.987176,233.42805 188.192305,233.65683 C147.397435,233.88561 127.116038,207.333333 127.348113,154"
              id="Path-9"
              stroke="url(#linearGradient-1)"
            ></path>
            <path
              d="M127,67.0971155 L127,154 C127,207.104553 105.064102,233.65683 61.1923054,233.65683 C17.320509,233.65683 -2.96088855,207.104553 0.348112676,154"
              id="Path-9"
              stroke="url(#linearGradient-2)"
            ></path>
          </g>
          <circle id="Oval" fill="#454545" cx="32" cy="79" r="32"></circle>
          <path
            d="M22.0725,66.6114458 L22.0725,91.7513633 C22.0725,93.6684033 24.1306567,94.8331872 25.715674,93.789735 L44.9724507,81.2197762 C46.4391831,80.2733894 46.4391831,78.0894197 44.9724507,77.1187665 L25.715674,64.5730741 C24.1306567,63.5296219 22.0725,64.6944057 22.0725,66.6114458 Z"
            id="Path"
            fill="#FFFFFF"
            fillRule="nonzero"
          ></path>
        </g>
      </g>
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
        <Link to="/" className="block">
          <SvgIcon />
        </Link>
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
