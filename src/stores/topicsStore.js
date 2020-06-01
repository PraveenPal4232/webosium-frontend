import { action } from "easy-peasy";

export default {
  allTopics: [],

  setTopics: action((state, topics) => {
    state.allTopics = topics;
  })
};