import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/race',
      name: 'racestatistic',
      component: () => import('../views/race.vue')
    },
    {
      path: '/gender',
      name: 'genderstatistic',
      component: () => import('../views/gender.vue')
    },
    {
      path: '/home',
      name: '',
      component: () => import('../views/Home.vue')
    }
  ]
})

export default router
