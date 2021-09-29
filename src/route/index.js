import { createWebHistory, createRouter } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: import ("@views/Home/index.vue"),
  },
  {
    path: '/about',
    name: 'about',
    component: import ("@views/About/index.vue"),
  },
  {
    path: '/repo',
    name: 'repo',
    component: import ("@views/Repo/index.vue"),
  },
  {
    path: '/article/:id',
    name: 'article',
    component: import ("@views/Article/index.vue"),
  },
  {
    path: "/*",
    redirect: "/"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
