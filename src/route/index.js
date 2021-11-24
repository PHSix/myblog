import { createWebHistory, createRouter } from "vue-router";

export const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@views/Home/index.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@views/About/index.vue"),
  },
  {
    path: "/repo",
    name: "repo",
    component: () => import("@views/Repo/index.vue"),
  },
  {
    path: "/articles/:id",
    name: "article",
    component: () => import("@views/Article/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: ()=> import("@views/Login.vue")
  },
  {
    path: "/*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
