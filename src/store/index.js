import { createStore } from "vuex";

export default createStore({
  state: {
    sidebar: null,
    markers: [],
  },
  mutations: {
    openSidebar(state) {
      if (state.sidebar) {
        state.sidebar.open();
      }
    },
  },
  actions: {},
  modules: {},
});
