import { createStore } from "vuex";

export default createStore({
  state: {
      list: [],
  },
  mutations: {
    addEntry(state, item) {
      state.list.push(item);
    },
  },
  actions: {},
});
