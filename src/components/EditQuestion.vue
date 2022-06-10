<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" :id="'edit-question-modal-' + question.id" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Edit question #{{ question.id }}</h3>
      <div class="mt-3">
        <FormKit
            type="text"
            label="Subject"
            help="The subject of the question"
            validation="required|length:3,255"
            validation-visibility="live"
            v-model="editQuestionForm.subject"
        />
        <FormKit
            type="text"
            label="Judul Pertanyaan"
            validation-visibility="live"
            validation="required|length:3,255"
            v-model="editQuestionForm.title"
            placeholder="Write down the question title in here"
            help="The title of the question, which will appear in questions card in homepage"
        />
        <ckeditor :editor="ckEditor.editor" v-model="editQuestionForm.body" :config="ckEditor.editorConfig"></ckeditor>
      </div>
      <div class="modal-action">
        <label :for="'edit-question-modal-' + question.id" class="btn btn-outline">Cancel</label>
        <label @click.prevent="updateQuestion" class="btn">Submit Change</label>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useToast as UseToast } from 'vue-toastification'
import QuestionService from '../services/question'
import { mapState } from 'pinia/dist/pinia'
import { useConfigStore } from '../stores/config'
import { useAuthStore } from '../stores/auth'
export default {
  name: 'EditQuestion',
  props: {
    question: [Object, Array]
  },
  data () {
    return {
      ckEditor: {
        editor: ClassicEditor,
        editorConfig: {
          // The configuration of the editor.
        }
      },
      editQuestionForm: {
        id: '',
        title: '',
        body: '',
        subject: ''
      }
    }
  },
  mounted () {
    this.editQuestionForm = {
      id: this.question.id,
      title: this.question.title,
      body: this.question.body,
      subject: this.question.subject
    }
  },
  computed: {
    ...mapState(useConfigStore, {
      prodBackendUri: 'prod_backend_uri'
    }),
    ...mapState(useAuthStore, ['token'])
  },
  methods: {
    async updateQuestion () {
      const loader = this.$loading.show({
        // Optional parameters
        isFullPage: true,
        loader: 'dots'
      })

      const toast = UseToast()
      const questionService = new QuestionService(this.axios)

      try {
        const resp = await questionService
          .updateQuestion(
                `${this.prodBackendUri}/questions/${this.editQuestionForm.id}`,
                this.token.value,
                {
                  title: this.editQuestionForm.title,
                  body: this.editQuestionForm.body,
                  subject: this.editQuestionForm.subject
                }
          )

        if (resp.status_code === 200) {
          loader.hide()
          toast.success('Question updated successfully')

          setTimeout(() => {
            this.$router.go()
          }, 1250)
        }
      } catch (e) {
        toast.error('Oops! Something went wrong')
      } finally {
        loader.hide()
      }
    }
  }
}
</script>

<style scoped>

</style>
