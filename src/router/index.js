import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage"),
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("../views/AddPage"),
  },
  {
    path: "/update/:id",
    name: "Update",
    component: () => import("../views/UpdatePage"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignupPage"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import("../views/LoginPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
