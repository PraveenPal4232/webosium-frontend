import { action } from "easy-peasy";

export default {
  FName: "",
  LName: "",
  image: "",
  authToken: "",
  email: "",

  setGoogleUser: action((state, data) => {
    const { email, familyName, givenName, imageUrl } = data.profileObj;
    state.FName = givenName;
    state.LName = familyName;
    state.email = email;
    state.image = imageUrl;
    state.authToken = data.accessToken;
  }),
};
