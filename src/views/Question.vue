<template>
  <div>
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
              <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Question #{{ question.id }}</a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="min-w-screen flex justify-center px-5 pb-10">
      <div class="card w-90 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title my-2">
            <div class="avatar mr-2">
              <div class="w-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=3174" />
              </div>
            </div>
            <div class="badge badge-outline">{{ question.user.name }}</div>
          </h2>
          <h2 class="card-title">
            <div class="font-semibold">
              {{ question.subject}}
            </div>
          </h2>
          <p>{{ question.question }}</p>
          <div class="card-actions justify-end mt-5">
            <div class="font-semibold text-md badge badge-outline">{{ question.created_at }}</div>
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
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li v-for="answer in question.answers" :key="answer.id" class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <div class="avatar mr-2">
                    <div class="w-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://api.lorem.space/image/face?hash=3174" />
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
                <div class="inline-flex items-center text-md font-semibold text-gray-500 dark:text-white">
                  {{ answer.created_at }}
                </div>
              </div>
              <div class="flex items-center space-x-4 mt-5">
                <div class="">
                  <p class="break-words">
                    {{ answer.body }}
                  </p>
                </div>
              </div>
              <aside>
                <div class="flex justify-end items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                  <ul class="menu menu-horizontal bg-base-100 shadow-lg rounded-box">
                    <li>
                      <label :for="'edit-modal-' + answer.id">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-square h-4 w-4" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                      </label>

                      <!-- Put this part before </body> tag -->
                      <input type="checkbox" :id="'edit-modal-' + answer.id" class="modal-toggle" />
                      <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                          <h3 class="font-bold text-lg">This is edit {{ answer.id }}</h3>
                          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                          <div class="modal-action">
                            <label :for="'edit-modal-' + answer.id" class="btn btn-outline">Cancel</label>
                            <label :for="'edit-modal-' + answer.id" class="btn">Submit Change</label>
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
                          <h3 class="font-bold text-lg">This is delete {{ answer.id }}</h3>
                          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                          <div class="modal-action">
                            <label :for="'delete-modal-' + answer.id" class="btn btn-outline">Cancel</label>
                            <label :for="'delete-modal-' + answer.id" class="btn">Delete</label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
            </li>
            <li class="pt-5">
              <form class="basis-1/2">
                <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                  <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                    <label for="comment" class="sr-only">Your comment</label>
                    <textarea id="comment" rows="3" class="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:outline-none dark:text-white dark:placeholder-gray-400" placeholder="Write an answer..." required></textarea>
                  </div>
                  <div class="flex justify-end items-center py-2 px-3 border-t dark:border-gray-600">
                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                      Submit Answer
                    </button>
                  </div>
                </div>
              </form>
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
export default {
  name: 'Question',
  components: {
    Navbar,
    QuestionCard,
    Footer
  },
  data () {
    return {
      question: {
        id: 1,
        question: 'Diketahui vektor a = 4i - 2j +2k dan vektor b = 2i - 6j + 4k. proyeksi orthogonal vektor b pada vektor a adalah....',
        subject: 'Matematika',
        created_at: moment().format('MMMM DD YYYY, h:mm:ss a'),
        user: {
          name: 'Faris Nur Faza',
          avatar: 'https://api.lorem.space/image/face?hash=33791'
        },
        answers: [
          {
            id: 1,
            body: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt.\n' +
                '<br>' +
                'Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
            user: {
              name: 'Faris Nur Faza',
              avatar: 'https://api.lorem.space/image/face?hash=33791',
              email: 'faris@gmail.com'
            },
            created_at: moment().format('MMMM DD YYYY, h:mm:ss a')
          },
          {
            id: 2,
            body: 'This is an example of answer',
            user: {
              name: 'Faris Nur Faza',
              avatar: 'https://api.lorem.space/image/face?hash=33791',
              email: 'faris@gmail.com'
            },
            created_at: moment().format('MMMM DD YYYY, h:mm:ss a')
          },
          {
            id: 3,
            body: 'This is an example of answer',
            user: {
              name: 'Faris Nur Faza',
              avatar: 'https://api.lorem.space/image/face?hash=33791',
              email: 'faris@gmail.com'
            },
            created_at: moment().format('MMMM DD YYYY, h:mm:ss a')
          },
          {
            id: 4,
            body: 'This is an example of answer',
            user: {
              name: 'Faris Nur Faza',
              avatar: 'https://api.lorem.space/image/face?hash=33791',
              email: 'faris@gmail.com'
            },
            created_at: moment().format('MMMM DD YYYY, h:mm:ss a')
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
