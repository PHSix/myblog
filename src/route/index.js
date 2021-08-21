import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home/index.vue';
import About from '../views/About/index.vue';
import Repo from '../views/Repo/index.vue';
import Article from '../views/Article/index.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/repo',
    name: 'repo',
    component: Repo,
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article,
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
