<template>
  <div class="flex flex-col min-h-screen justify-between bg-white">
    <Navbar/>
    <div class="flex items-center justify-center px-5">
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
              <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                My Questions
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="flex items-center justify-center pt-5">
      <form @submit.prevent="fetchHomeData">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input v-model="formSearch.search" type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search questions...">
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>
      </form>
    </div>
    <div v-if="questions.length" class="pt-5 pb-10 px-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-y-8">
      <QuestionCard v-for="question in questions" :key="question.id" :question="question"/>
    </div>
    <div v-else class="pt-5 pb-10 px-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-y-8">
      <div></div>
      <h1 class="text-2xl font-semibold">No Question Appears</h1>
    </div>
    <div class="flex items-center justify-center px-5 pb-10">
      <div @click="movePage(currentPageDashboard - 1)" class="hover:cursor-pointer inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Previous
      </div>
      <div>
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Page {{currentPageDashboard}} of {{pagination.total_pages}} &nbsp;&nbsp;</p>
      </div>
      <div @click="movePage(currentPageDashboard + 1)" class="hover:cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import QuestionCard from '@/components/QuestionCard.vue'
import Footer from '@/components/Footer.vue'
import { mapActions, mapState } from 'pinia/dist/pinia'
import { useAuthStore } from '../stores/auth'
import { useConfigStore } from '../stores/config'
import { useQueryParamStore } from '../stores/query-param'
import { useToast as UseToast } from 'vue-toastification'
import QuestionService from '../services/question'

export default {
  name: 'MyQuestions',
  components: {
    Navbar,
    QuestionCard,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer
  },
  data () {
    return {
      formSearch: {
        search: ''
      },
      questions: [],
      pagination: {}
    }
  },
  async mounted () {
    await this.fetchHomeData()
  },
  computed: {
    ...mapState(useConfigStore, {
      prodBackendUri: 'prod_backend_uri'
    }),
    ...mapState(useAuthStore, ['token', 'user']),
    ...mapState(useQueryParamStore, ['currentPageDashboard', 'search'])
  },
  methods: {
    ...mapActions(useQueryParamStore, ['setCurrentPageDashboard', 'setSearch']),
    async fetchHomeData () {
      this.setSearch(this.formSearch.search)

      let params = {
        uid: this.user.id
      }

      if (this.search) {
        params = {
          ...params,
          search: this.search
        }
      }

      if (this.currentPage) {
        params = {
          ...params,
          current_page: this.currentPageDashboard
        }
      }

      const loader = this.$loading.show({
        // Optional parameters
        isFullPage: true,
        loader: 'dots'
      })

      const toast = UseToast()
      const questionService = new QuestionService(this.axios)

      try {
        const res = await questionService
          .getQuestions(
                `${this.prodBackendUri}/questions`,
                this.token.value,
                params
          )

        if (res.status_code === 200 && res.message === 'success:get:questions') {
          loader.hide()
          this.questions = res.data.questions
          this.pagination = res.data.pagination
          this.setCurrentPageDashboard(this.pagination.current_page)
        }
      } catch (e) {
        loader.hide()
        toast.error('Something went wrong, internal server error.')
      }
    },
    async movePage (toPage) {
      if (toPage && toPage <= this.pagination.total_pages) {
        this.setCurrentPageDashboard(toPage)
        await this.fetchHomeData()
      }
    }
  }
}
</script>

<style scoped>

</style>
