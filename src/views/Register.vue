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
          <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
        </div>
      </div>
      <div class="mb-3 -mx-2 flex items-end">
        <div class="px-2 w-1/2">
          <label class="font-bold text-sm mb-2 ml-1">Email</label>
          <div>
            <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="johndoe@email.com" type="email"/>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <label class="font-bold text-sm mb-2 ml-1">Password</label>
          <div>
            <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="****************" type="password"/>
          </div>
        </div>
      </div>
      <div>
        <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 mt-8 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> REGISTER</button>
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
export default {
  name: 'Register'
}
</script>

<style scoped>

</style>
