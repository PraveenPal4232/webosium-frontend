import topicsStore from "./topicsStore";
import eventsStore from "./eventsStore";
import googleUserStore from "./googleUserStore";
import { action } from "easy-peasy";

export default {
  topics: topicsStore,
  events: eventsStore,
  googleUser: googleUserStore,
  isLoggedIn: false,

  setLoggedIn: action((state, loginState) => {
    state.isLoggedIn = loginState;
  }),
};
