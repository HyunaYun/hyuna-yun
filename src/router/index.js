import Vue from "vue";
import VueRouter from "vue-router";

import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Map from "@/views/Map.vue";
import Todo from "@/views/Todo.vue";
import Setting from "@/views/Setting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/hyuna-yun",
    redirect: "/hyuna-yun/login",
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
  {
    path: "/hyuna-yun/map",
    name: "Map",
    component: Map,
  },
  {
    path: "/hyuna-yun/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/hyuna-yun/setting",
    name: "Setting",
    component: Setting,
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
