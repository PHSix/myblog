import { createStore } from "vuex";

export default createStore({
  state: {
      issuesList: [],
  },
  mutations: {
    addIssue(state, issue) {
      state.issuesList.push(issue);
    },
  },
  actions: {},
});
