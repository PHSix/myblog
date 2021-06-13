import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("../views/About.vue"),
  },
  {
    path: '/issue/:id',
    name: 'Issue',
    component: () => import("../views/Issue.vue"),
  },
  {
    path: '/',
    name: 'Default',
    component: Home,
    redirect: "home"
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
