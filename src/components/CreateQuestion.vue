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
            validation="required|length:3,255"
            validation-visibility="dirty"
            placeholder="Write down the question subject in here"
            v-model="formQuestion.subject"
        />
        <FormKit
            type="text"
            label="Title"
            validation="required|length:3,255"
            v-model="formQuestion.title"
            placeholder="Write down the question title in here"
            validation-visibility="dirty"
            help="The title of the question, which will appear in questions card in homepage"
        />
        <label for="comment" class="font-bold text-xs">Question Details</label>
        <ckeditor
            :editor="ckEditor.editor"
            v-model="formQuestion.body"
            :config="ckEditor.editorConfig"
            placeholder="Write down the question details in here"
        >
        </ckeditor>
      </div>
      <div class="modal-action">
        <label :for="'create-modal'" class="btn btn-sm btn-outline">Cancel</label>
        <label v-if="!loading" @click="submitQuestion" class="btn btn-sm">Submit</label>
        <label v-else class="btn btn-sm">
          <span class="loader"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia/dist/pinia'
import { useAuthStore } from '../stores/auth'
import { useConfigStore } from '../stores/config'
import { useToast as UseToast } from 'vue-toastification'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import QuestionService from '@/services/question'
import { FormKit } from '@formkit/vue'

export default {
  name: 'CreateQuestion',
  components: {
    FormKit
  },
  data () {
    return {
      loading: false,
      ckEditor: {
        editor: ClassicEditor,
        editorConfig: {
          // The configuration of the editor.
        }
      },
      formQuestion: {
        title: '',
        subject: '',
        body: ''
      }
    }
  },
  computed: {
    ...mapState(useAuthStore, ['token']),
    ...mapState(useConfigStore, {
      prodBackendUri: 'prod_backend_uri'
    })
  },
  methods: {
    async submitQuestion () {
      this.loading = true
      const toast = UseToast()
      const questionService = new QuestionService(this.axios)

      try {
        const response = await questionService
          .storeQuestion(this.formQuestion, `${this.prodBackendUri}/questions`, this.token.value)

        if (response.status_code === 200) {
          toast.success('Question created successfully')

          setTimeout(() => {
            this.$router.go()
          }, 1500)
        }
      } catch (e) {
        questionService.handleStoreQuestionError(e, toast)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
