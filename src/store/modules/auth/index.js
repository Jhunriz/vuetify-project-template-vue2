import axios from "axios";
import config from "@/config";

function safeParse(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

export default {
  namespaced: true,

  state: {
    user: safeParse(config.auth.userKey),
    token: localStorage.getItem(config.auth.tokenKey),
    isAuthenticated: !!localStorage.getItem(config.auth.tokenKey),
    loading: false,
    error: null,
  },

  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
    isLoading: (state) => state.loading,
    authError: (state) => state.error,
  },

  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading;
    },

    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
      localStorage.setItem(config.auth.userKey, JSON.stringify(user));
    },

    SET_TOKEN(state, token) {
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem(config.auth.tokenKey, token); // ✅ string only
      axios.defaults.headers.common.Authorization = `${config.auth.tokenPrefix} ${token}`;
    },

    SET_ERROR(state, error) {
      state.error = error;
    },

    CLEAR_ERROR(state) {
      state.error = null;
    },

    LOGOUT(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem(config.auth.tokenKey);
      localStorage.removeItem(config.auth.userKey);
      delete axios.defaults.headers.common.Authorization;
    },
  },

  actions: {
    async login({ commit }, credentials) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const response = await axios.post(
          `${config.api.baseUrl}${config.api.endpoints.login}`,
          credentials,
        );

        const token = response.data?.data?.access_token;

        if (!token) {
          throw new Error("Token not found in response");
        }

        commit("SET_TOKEN", token);
        commit("SET_LOADING", false);

        return { success: true };
      } catch (error) {
        const message =
          error.response?.data?.message || error.message || "Login failed";

        commit("SET_ERROR", message);
        commit("SET_LOADING", false);

        return { success: false, message };
      }
    },

    logout({ commit }) {
      commit("LOGOUT");
      commit("CLEAR_ERROR");
    },
  },
};
