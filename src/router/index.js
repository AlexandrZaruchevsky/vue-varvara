import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/alfavit",
    name: "Alfavit",
    component: () => import("../views/Alfavit.vue"),
  },
  {
    path: "/audio",
    name: "Audio",
    component: () => import("../views/Audio.vue")
  },
  {
    path: "/choice",
    name: "Choice",
    component: () => import("../views/Choice.vue")
  },
  {
    path: "/*",
    name: "NotFound",
    component: ()=>import('../views/NotFound.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
