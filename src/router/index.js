import { createRouter, createWebHistory } from 'vue-router'
import Invitation from '../views/Invitations.vue';
import ConfirmedGuests from '../views/ConfirmedGuests.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'invitation',
      component: Invitation
    },
    {
      path: '/presencas-confirmadas',
      name: 'confirmed-guests',
      component: ConfirmedGuests
    }
  ]
})

export default router
