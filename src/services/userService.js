import http from "./httpService";
import APIURL from "./apiUrl";

const exchangeGoogleAccessToken = async (googleAccessToken) => {
  const res = await http.post(APIURL.USER_EXCHANGE_TOKEN, {
    grant_type: "convert_token",
    client_id: process.env.REACT_APP_CLIENT_ID_DJANGO,
    backend: "google-oauth2",
    token: googleAccessToken,
  });

  return res.data;
};

export { exchangeGoogleAccessToken };
