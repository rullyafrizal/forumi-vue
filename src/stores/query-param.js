import { defineStore } from 'pinia'

export const useQueryParamStore = defineStore('queryParamStore', {
  state: () => ({
    _currentPage: 1,
    _currentPageDashboard: 1,
    _search: ''
  }),
  actions: {
    setCurrentPage (page) {
      this._currentPage = page
    },
    setSearch (search) {
      this._search = search
    },
    setCurrentPageDashboard (page) {
      this._currentPageDashboard = page
    }
  },
  getters: {
    currentPage: (state) => state._currentPage,
    search: (state) => state._search,
    currentPageDashboard: (state) => state._currentPageDashboard
  },
  persist: {
    key: 'forumi-query-params',
    storage: window.localStorage
  }
})
