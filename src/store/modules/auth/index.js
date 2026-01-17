import axios from 'axios'
import config from '@/config'

export default {
  namespaced: true,
  
  state: {
    user: JSON.parse(localStorage.getItem(config.auth.userKey)) || null,
    token: localStorage.getItem(config.auth.tokenKey) || null,
    isAuthenticated: !!localStorage.getItem(config.auth.tokenKey),
    loading: false,
    error: null
  },
  
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.user,
    isLoading: state => state.loading,
    authError: state => state.error
  },
  
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    
    SET_USER(state, user) {
      state.user = user
      state.isAuthenticated = true
      localStorage.setItem(config.auth.userKey, JSON.stringify(user))
    },
    
    SET_TOKEN(state, token) {
      state.token = token
      state.isAuthenticated = true
      localStorage.setItem(config.auth.tokenKey, token)
      axios.defaults.headers.common['Authorization'] = `${config.auth.tokenPrefix} ${token}`
    },
    
    SET_ERROR(state, error) {
      state.error = error
    },
    
    CLEAR_ERROR(state) {
      state.error = null
    },
    
    LOGOUT(state) {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      localStorage.removeItem(config.auth.tokenKey)
      localStorage.removeItem(config.auth.userKey)
      delete axios.defaults.headers.common['Authorization']
    }
  },
  
  actions: {
    // Login action
    async login({ commit }, credentials) {
      commit('SET_LOADING', true)
      commit('CLEAR_ERROR')
      
      try {
        // ✅ FIXED: Correct template literal syntax
        const response = await axios.post(`${config.api.baseUrl}${config.api.endpoints.login}`, {
          email: credentials.email,
          password: credentials.password
        })
        
        const { token, user } = response.data
        
        commit('SET_TOKEN', token)
        commit('SET_USER', user)
        commit('SET_LOADING', false)
        
        return { success: true }
        
      } catch (error) {
        const message = error.response?.data?.message || 'Login failed'
        commit('SET_ERROR', message)
        commit('SET_LOADING', false)
        
        return { success: false, message }
      }
    },
    
    // Logout action
    logout({ commit }) {
      commit('LOGOUT')
      commit('CLEAR_ERROR')
    },
    
    // Clear error
    clearError({ commit }) {
      commit('CLEAR_ERROR')
    }
  }
}