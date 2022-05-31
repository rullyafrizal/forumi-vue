import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
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
      component: () => import('../views/MyQuestions.vue')
    },
    {
      path: '/question/1',
      name: 'question1',
      component: () => import('../views/Question.vue')
    }
  ]
})

export default router
