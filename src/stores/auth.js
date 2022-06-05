import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    _token: {},
    _user: {}
  }),
  actions: {
    setToken (token) {
      this._token = token
    },
    setUser (user) {
      this._user = user
    }
  },
  getters: {
    token: (state) => state._token,
    user: (state) => state._user,
    isLoggedIn: (state) => Object.keys(state.token).length === 0
  },
  persist: {
    key: 'forumi-token',
    storage: window.localStorage
  }
})
