import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import Login from "@/pages/authentication/Login.vue";
import GuestLayout from "@/layouts/GuestLayout.vue";
import AuthLayoutPage from "@/layouts/AuthLayout.vue";
import guest from "@/middleware/guest";
import auth from "@/middleware/auth";

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
        meta: { middleware: guest },
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
        meta: { middleware: auth },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) return next();

  const middleware = to.meta.middleware;
  return middleware({ to, from, next, router });
});


export default router;
