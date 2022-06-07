<template>
  <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
    <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style="max-width: 600px">
      <div class="w-full pt-1 pb-5">
        <div class="bg-white text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
          <img src="../assets/img/logo.png" class="w-8" alt="">
        </div>
      </div>
      <div class="mb-10">
        <h1 class="text-center font-bold text-2xl">Let's Get Started</h1>
      </div>
      <div class="mb-3">
        <label class="font-bold text-sm mb-2 ml-1">Name</label>
        <div>
          <input v-model="formRegister.name" class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
        </div>
      </div>
      <div class="mb-3 -mx-2 flex items-end">
        <div class="px-2 w-1/2">
          <label class="font-bold text-sm mb-2 ml-1">Email</label>
          <div>
            <input v-model="formRegister.email" class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="johndoe@email.com" type="email"/>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <label class="font-bold text-sm mb-2 ml-1">Password</label>
          <div>
            <input v-model="formRegister.password" class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="****************" type="password"/>
          </div>
        </div>
      </div>
      <div>
        <button
            @click="register"
            class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 mt-8 font-semibold"
        >
          <span class="flex-1 flex justify-center ">
            <span v-if="!loading" class="text-white font-semibold">
              <i class="mdi mdi-lock-outline mr-1"></i> REGISTER
            </span>
            <span v-else class="loader"></span>
          </span>
        </button>
      </div>
      <div>
        <button class="block text-gray-500 hover:text-gray-600 w-full max-w-xs mx-auto px-3 py-3 font-semibold">
          <router-link :to="'/auth/login'">Already have an account?</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia/dist/pinia'
import { useConfigStore } from '@/stores/config'
import { useToast as UseToast } from 'vue-toastification'
import AuthService from '@/services/auth'
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'Register',
  data () {
    return {
      formRegister: {
        name: '',
        email: '',
        password: ''
      },
      loading: false
    }
  },
  computed: {
    ...mapState(useConfigStore, {
      prodBackendUri: 'prod_backend_uri'
    })
  },
  methods: {
    ...mapActions(useAuthStore, ['setToken', 'setUser']),
    async register () {
      this.loading = true
      const toast = UseToast()
      const authService = new AuthService(this.axios)

      try {
        const { name, email, password } = this.formRegister

        const response = await authService.register(name, email, password, `${this.prodBackendUri}/auth/register`)

        if (response.status_code === 200) {
          toast.info('Register successful, logging in...')

          const resp = await authService.login(email, password, `${this.prodBackendUri}/auth/login`)

          if (resp.status_code === 200) {
            this.setToken(resp.data.token)
            this.setUser(resp.data.user)

            const urlParams = new URLSearchParams(window.location.search)
            const redirect = urlParams.get('redirect')

            setTimeout(() => {
              this.loading = false
              redirect ? this.$router.push({ name: redirect }) : this.$router.push('/')
            }, 1000)
          }
        }
      } catch (e) {
        this.loading = false
        authService.handleRegisterError(e, toast)
      }
    }
  }
}
</script>

<style scoped>

</style>
