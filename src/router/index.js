import Vue from "vue";
import VueRouter from "vue-router";

import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/hyuna-yun",
    redirect: "/hyuna-yun/main",
  },
  {
    path: "/hyuna-yun/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/hyuna-yun/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/hyuna-yun/profile",
    name: "Profile",
    component: Profile,
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
