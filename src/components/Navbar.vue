<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost normal-case font-bold text-2xl">
        <img src="../assets/img/logo.png" class="h-8 pr-2" alt="">
        Forumi
      </router-link>
    </div>
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <label for="create-modal">
              <span class="badge badge-primary font-semibold">&#43;</span> Ask Question
            </label>
          </li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
