export default {
  namespaced: true,

  state: {
    count: 0,
  },

  getters: {
    doubleCount: (state) => state.count * 2,
  },

  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    setCount(state, value) {
      state.count = value;
    },
  },

  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    async incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
  },
};
