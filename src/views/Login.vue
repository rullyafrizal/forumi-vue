<template>
  <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style="max-width: 500px">
      <div class="w-full pt-1 pb-5">
        <div class="bg-white text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
          <img src="../assets/img/logo.png" class="w-8" alt="">
        </div>
      </div>
      <div class="mb-10">
        <h1 class="text-center font-bold text-2xl">Welcome Back</h1>
      </div>
      <div class="mb-3">
        <label class="font-bold text-sm mb-2 ml-1">Email</label>
        <div>
          <input
              v-model="formLogin.email"
              class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="johnsmith@email.com"
              type="email"
          />
        </div>
      </div>
      <div class="mb-3">
        <label class="font-bold text-sm mb-2 ml-1">Password</label>
        <div>
          <input
              v-model="formLogin.password"
              class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="************"
              type="password"
          />
        </div>
      </div>
      <div>
        <button
            @click="login"
            class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700  rounded-lg px-3 py-3 mt-8 "
        >
          <span class="flex-1 flex justify-center ">
            <span v-if="!loading" class="text-white font-semibold">
              <i class="mdi mdi-lock-outline mr-1"></i> SIGN IN
            </span>
            <span v-else class="loader"></span>
          </span>
        </button>
      </div>
      <div>
        <button class="block text-gray-500 hover:text-gray-600 w-full max-w-xs mx-auto px-3 py-3 font-semibold">
          <router-link :to="'/auth/register'">Don't have an account?</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useConfigStore } from '@/stores/config'
import { useAuthStore } from '@/stores/auth'
import { mapState, mapActions } from 'pinia'
import AuthService from '../services/auth'
import { useToast as UseToast } from 'vue-toastification'

export default {
  name: 'Login Page',
  computed: {
    ...mapState(useConfigStore, {
      prodBackendUri: 'prod_backend_uri'
    })
  },
  data () {
    return {
      formLogin: {
        email: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['setToken']),
    async login () {
      this.loading = true
      const toast = UseToast()
      const authService = new AuthService(this.axios)

      try {
        const { email, password } = this.formLogin

        const response = await authService.login(email, password, `${this.prodBackendUri}/auth/login`)

        if (response.status_code === 200) {
          toast.info('Login Successful')
          this.setToken(response.data.token)

          const urlParams = new URLSearchParams(window.location.search)
          const redirect = urlParams.get('redirect')

          setTimeout(() => {
            this.loading = false
            this.$router.push({ name: redirect })
          }, 1000)
        }
      } catch (e) {
        authService.handleLoginError(e, toast)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
