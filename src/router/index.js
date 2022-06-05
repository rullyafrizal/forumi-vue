import { createRouter, createWebHistory } from 'vue-router'
import moment from 'moment'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/auth/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/auth/dashboard',
      name: 'dashboard',
      component: () => import('../views/MyQuestions.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/question/1',
      name: 'question1',
      component: () => import('../views/Question.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    const auth = JSON.parse(localStorage.getItem('forumi-token'))
    const isTokenValid = auth && auth._token && moment.unix(auth._token.expiresIn).isAfter(moment.now())

    if (isTokenValid) {
      next()
      return
    }
    next({
      path: '/auth/login',
      query: { redirect: to.name }
    })
    return
  }
  next()
})

export default router
