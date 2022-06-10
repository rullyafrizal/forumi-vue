<script>
import { RouterView } from 'vue-router'
import CreateQuestion from '@/components/CreateQuestion.vue'
export default {
  name: 'App',
  components: {
    RouterView,
    CreateQuestion
  }
}
</script>

<template>
  <CreateQuestion />
  <RouterView />
</template>

<style>
@import '@/assets/base.css';
@import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}
</style>
