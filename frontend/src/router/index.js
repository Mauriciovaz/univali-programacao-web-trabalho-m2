import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/campanha/:id',
      name: 'campaign',
      component: () => import('../views/CampaignView.vue'),
    },
    {
      path: '/cadastrar',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    }
  ],
});

export default router;
