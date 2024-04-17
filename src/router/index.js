import { createRouter, createWebHistory } from 'vue-router'
import Invitation from '../views/Invitations.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'invitation',
      component: Invitation
    }
  ]
})

export default router
