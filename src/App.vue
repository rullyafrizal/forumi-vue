<script>
import { RouterView } from 'vue-router'
import { FormKit } from '@formkit/vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
export default {
  name: 'App',
  components: {
    RouterView,
    FormKit
  },
  data () {
    return {
      ckEditor: {
        editor: ClassicEditor,
        editorConfig: {
          // The configuration of the editor.
        }
      },
      formQuestion: {
        title: '',
        subject: '',
        details: ''
      }
    }
  }
}
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
            help="The subject of the question"
            validation="required"
            validation-visibility="live"
            v-model="formQuestion.subject"
        />
        <FormKit
            type="textarea"
            label="Judul Pertanyaan"
            rows="3"
            validation="required"
            v-model="formQuestion.title"
            placeholder="Write down the question title in here"
            help="The title of the question, which will appear in questions card in homepage"
        />
        <label for="comment" class="font-bold text-xs">Question Details</label>
        <ckeditor
            :editor="ckEditor.editor"
            v-model="formQuestion.details"
            :config="ckEditor.editorConfig"
            placeholder="Write down the question details in here"
        >
        </ckeditor>
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
