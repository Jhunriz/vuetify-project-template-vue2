import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import Login from "@/pages/authentication/Login.vue";
import GuestLayout from "@/layouts/GuestLayout.vue";
import AuthLayoutPage from '@/layouts/AuthLayout.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: GuestLayout,
    children: [
      {
        path: "/",
        name: "Login",
        component: Login,
      },
    ],
  },
  {
    path: "/home",
    component: AuthLayoutPage,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
