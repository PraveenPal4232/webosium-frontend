import { action } from "easy-peasy";

export default {
  allEvents: [],

  setEvents: action((state, events) => {
    state.allEvents = events;
  })
};