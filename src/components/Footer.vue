<template>
  <footer class="footer footer-center p-4 bg-base-200 text-base-content">
    <div>
      <p class="font-semibold">Copyright © {{ year }} - All right reserved by Forumi Ltd</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
