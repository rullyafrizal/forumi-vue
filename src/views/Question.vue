<template>
  <div class="flex flex-col min-h-screen justify-between">
    <Navbar/>
    <div class="flex items-center justify-center px-5 mb-5">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <router-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              Home
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Question #{{ this.$route.params.id }}</a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="min-w-screen flex justify-center px-5 pb-10">
      <div class="card xl:w-1/2 md:w-3/4 sm:w-full bg-base-100 hover:shadow-2xl shadow-xl">
        <div v-if="Object.keys(question).length" class="card-body">
          <h2 class="card-title my-2">
            <div class="avatar mr-2">
              <div class="w-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img :src="question.user.avatar" />
              </div>
            </div>
            <div class="badge badge-outline">{{ question.user.name }}</div>
          </h2>
          <h2 class="card-title">
            <div class="font-semibold text-xl">
              {{ question.subject}}
            </div>
          </h2>
          <h2 class="font-semibold">{{ question.title }}</h2>
          <div class="border-2 rounded-xl p-5 border-dashed border-gray-300">
            <p v-html="question.body"></p>
          </div>
          <aside v-if="user.id === question.user.id" class="mt-3">
            <div class="flex justify-end items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
              <ul class="menu menu-horizontal bg-base-100 shadow-lg rounded-box">
                <li>
                  <label :for="'edit-question-modal-' + question.id">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-square h-4 w-4" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                  </label>

                  <!-- Put this part before </body> tag -->
                  <EditQuestion :question="question"/>
                </li>
                <li class="bg-red-600">
                  <label :for="'dlt-question-modal-' + question.id">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-white h-4 w-4 bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </label>

                  <!-- Put this part before </body> tag -->
                  <input type="checkbox" :id="'dlt-question-modal-' + question.id" class="modal-toggle" />
                  <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">Delete Confirmation #{{ question.id }}</h3>
                      <p class="py-4">Are you sure you want to delete this question?</p>
                      <div class="modal-action">
                        <label :for="'dlt-question-modal-' + question.id" class="btn btn-outline">Cancel</label>
                        <label @click.prevent="deleteQuestion" class="btn">Delete</label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
          <div class="card-actions justify-end mt-2">
            <div class="font-semibold text-sm badge badge-outline">{{ newMoment(question.createdAt) }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="justify-center px-5 pb-5">
      <div class="p-4 bg-white min-w-full rounded-xl border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Answers</h5>
        </div>
        <div class="flow-root">
          <ul v-if="Object.keys(question).length" role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li v-for="answer in question.answers" :key="answer.id" class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <div class="avatar mr-2">
                    <div class="w-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img :src="answer.user.avatar"  alt="avatar"/>
                    </div>
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ answer.user.name }}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ answer.user.email }}
                  </p>
                </div>
                <div class="inline-flex items-center font-semibold text-sm badge badge-outline text-gray-500 dark:text-white">
                  {{ newMoment(answer.createdAt) }}
                </div>
              </div>
              <div class="flex items-center space-x-4 mt-5">
                <div class="">
                  <p class="break-words" v-html="answer.body">
                  </p>
                </div>
              </div>
              <aside v-if="answer.user.id === user.id">
                <div class="flex justify-end items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                  <ul class="menu menu-horizontal bg-base-100 shadow-lg rounded-box">
                    <li>
                      <label :for="'edit-modal-' + answer.id" @click="editAnswer(answer)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-square h-4 w-4" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                      </label>

                      <!-- Put this part before </body> tag -->
                      <input type="checkbox" :id="'edit-modal-' + answer.id" class="modal-toggle" />
                      <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                          <h3 class="font-bold text-lg">Edit answer #{{ answer.id }}</h3>
                          <div class="mt-3">
                            <ckeditor :editor="ckEditor.editor" v-model="editAnswerForm.body" :config="ckEditor.editorConfig"></ckeditor>
                          </div>
                          <div class="modal-action">
                            <label :for="'edit-modal-' + answer.id" class="btn btn-outline">Cancel</label>
                            <label @click.prevent="updateAnswer(answer)" class="btn">Submit Change</label>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="bg-red-600">
                      <label :for="'delete-modal-' + answer.id">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="text-white h-4 w-4 bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                      </label>

                      <!-- Put this part before </body> tag -->
                      <input type="checkbox" :id="'delete-modal-' + answer.id" class="modal-toggle" />
                      <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                          <h3 class="font-bold text-lg">Delete Confirmation #{{ answer.id }}</h3>
                          <p class="py-4">Are you sure you want to delete this answer?</p>
                          <div class="modal-action">
                            <label :for="'delete-modal-' + answer.id" class="btn btn-outline">Cancel</label>
                            <label @click.prevent="deleteAnswer(answer.id)" class="btn">Delete</label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
            </li>
            <li class="pt-5">
              <div class="basis-1/2">
                <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                  <div class="py-4 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                    <label for="comment" class="sr-only">Your comment</label>
                    <ckeditor :editor="ckEditor.editor" v-model="answerForm.body" :config="ckEditor.editorConfig" placeholder="..."></ckeditor>
                  </div>
                  <div class="flex justify-end items-center py-2 px-3 border-t dark:border-gray-600">
                    <button @click.stop.prevent="createAnswer" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                      Submit Answer
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import QuestionCard from '@/components/QuestionCard.vue'
import Footer from '@/components/Footer.vue'
import moment from 'moment'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { FormKit } from '@formkit/vue'
import { mapState } from 'pinia/dist/pinia'
import { useConfigStore } from '../stores/config'
import { useAuthStore } from '../stores/auth'
import { useToast as UseToast } from 'vue-toastification'
import QuestionService from '../services/question'
import AnswerService from '../services/answer'
import EditQuestion from '@/components/EditQuestion.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Question',
  components: {
    EditQuestion,
    Navbar,
    QuestionCard,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
    FormKit
  },
  data () {
    return {
      question: {},
      answerForm: {
        body: ''
      },
      ckEditor: {
        editor: ClassicEditor,
        editorConfig: {
          // The configuration of the editor.
        }
      },
      editAnswerForm: {
        body: ''
      }
    }
  },
  async mounted () {
    await this.fetchQuestionData()
  },
  computed: {
    ...mapState(useConfigStore, {
      prodBackendUri: 'prod_backend_uri'
    }),
    ...mapState(useAuthStore, ['user', 'token'])
  },
  methods: {
    newMoment (d, pattern = 'ddd, MMMM DD YYYY h:mm a') {
      return moment(d).format(pattern).toString()
    },
    async fetchQuestionData () {
      const id = this.$route.params.id

      const loader = this.$loading.show({
        // Optional parameters
        isFullPage: true,
        loader: 'dots'
      })

      const toast = UseToast()
      const questionService = new QuestionService(this.axios)

      try {
        const res = await questionService
          .showQuestion(`${this.prodBackendUri}/questions/${id}`, this.token.value)

        if (res.status_code === 200 && res.message === 'success:get:question') {
          this.question = res.data
          loader.hide()
        }
      } catch (e) {
        toast.error(e.message)
      } finally {
        loader.hide()
      }
    },
    async deleteQuestion () {
      if (confirm('Are you sure?')) {
        const loader = this.$loading.show({
          // Optional parameters
          isFullPage: true,
          loader: 'dots'
        })

        const toast = UseToast()
        const questionService = new QuestionService(this.axios)

        try {
          const resp = await questionService
            .deleteQuestion(
                  `${this.prodBackendUri}/questions/${this.question.id}`,
                  this.token.value
            )

          if (resp.status_code === 200) {
            loader.hide()
            toast.success('Question deleted successfully')

            setTimeout(() => {
              this.$router.push({ name: 'home' })
            }, 1350)
          }
        } catch (e) {
          toast.error('Oops! Something went wrong')
        } finally {
          loader.hide()
        }
      }
    },
    async createAnswer () {
      const loader = this.$loading.show({
        // Optional parameters
        isFullPage: true,
        loader: 'dots'
      })

      const toast = UseToast()
      const answerService = new AnswerService(this.axios)

      try {
        const resp = await answerService
          .createAnswer(
            {
              body: this.answerForm.body,
              question_id: this.question.id
            },
            `${this.prodBackendUri}/answers`,
            this.token.value
          )

        if (resp.status_code === 200) {
          loader.hide()
          toast.success('Answer created successfully')

          setTimeout(() => {
            this.$router.go(0)
          }, 1250)
        }
      } catch (e) {
        toast.error('Oops! Something went wrong')
      } finally {
        loader.hide()
      }
    },
    async updateAnswer (answer) {
      const loader = this.$loading.show({
        // Optional parameters
        isFullPage: true,
        loader: 'dots'
      })

      const toast = UseToast()
      const answerService = new AnswerService(this.axios)

      try {
        const resp = await answerService
          .updateAnswer(
            {
              body: this.editAnswerForm.body
            },
            `${this.prodBackendUri}/answers/${answer.id}`,
            this.token.value
          )

        if (resp.status_code === 200) {
          loader.hide()
          toast.success('Answer updated successfully')

          setTimeout(() => {
            this.$router.go(0)
          }, 1250)
        }
      } catch (e) {
        toast.error('Oops! Something went wrong')
      } finally {
        loader.hide()
      }
    },
    editAnswer (answer) {
      this.editAnswerForm = {
        body: answer.body
      }
    },
    async deleteAnswer (answerId) {
      if (confirm('Are you sure?')) {
        const loader = this.$loading.show({
          // Optional parameters
          isFullPage: true,
          loader: 'dots'
        })

        const toast = UseToast()
        const answerService = new AnswerService(this.axios)

        try {
          const resp = await answerService
            .deleteAnswer(
              `${this.prodBackendUri}/answers/${answerId}`,
              this.token.value
            )

          if (resp.status_code === 200) {
            loader.hide()
            toast.success('Answer deleted successfully')

            setTimeout(() => {
              this.$router.go(0)
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
}
</script>

<style scoped>

</style>
