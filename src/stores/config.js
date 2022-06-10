import { defineStore } from 'pinia'

export const useConfigStore = defineStore('configStore', {
  state: () => ({
    backend_uri: {
      local: 'http://localhost:3000/api/v1',
      prod: 'https://api.forumi.my.id/api/v1'
    }
  }),
  getters: {
    local_backend_uri: (state) => state.backend_uri.local,
    prod_backend_uri: (state) => state.backend_uri.prod
  }
})
