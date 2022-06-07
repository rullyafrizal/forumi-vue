<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost normal-case font-bold text-2xl">
        <img src="../assets/img/logo.png" class="h-8 pr-2" alt="">
        Forumi
      </router-link>
    </div>
    <div v-if="!isGuest" class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img :src="user.avatar" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <label for="create-modal">
              <span class="badge badge-primary font-semibold">&#43;</span> Ask Question
            </label>
          </li>
          <li>
            <label for="create-modal">
              <router-link to="/auth/dashboard">
                My Questions
              </router-link>
            </label>
          </li>
          <li @click="logout"><a>Logout</a></li>
        </ul>
      </div>
    </div>
    <div v-else class="navbar-end">
      <router-link to="/auth/login" class="btn">Get started</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'Navbar',
  computed: {
    ...mapState(useAuthStore, ['isGuest', 'user'])
  },
  methods: {
    ...mapActions(useAuthStore, ['setToken', 'setUser']),
    logout () {
      this.setToken({})
      this.setUser({})

      setTimeout(() => {
        this.$router.push({ name: 'login' })
      }, 500)
    }
  }
}
</script>

<style scoped>

</style>
