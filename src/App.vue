<script setup>
import { RouterView } from 'vue-router'
import { FormKit } from '@formkit/vue'
</script>

<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="create-modal" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h1 class="font-bold text-2xl">Ask New Question</h1>
      <div id="forms" class="pt-4">
        <FormKit
            type="text"
            label="Subject"
            help="Enter your question subject"
            validation="required"
            validation-visibility="live"
        />
        <FormKit
            type="textarea"
            label="Your Question"
            rows="6"
            validation="required"
            placeholder="Remember to write in complete and clear sentences."
            help="Write your question here"
        />
      </div>
      <div class="modal-action">
        <label :for="'create-modal'" class="btn btn-sm btn-outline">Cancel</label>
        <label :for="'create-modal'" class="btn btn-sm">Submit</label>
      </div>
    </div>
  </div>

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
