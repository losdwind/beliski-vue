import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logup from "../views/Logup.vue";
import { auth } from "../firebase/config";

const requireAuth = (
  to: any,
  from: any,
  next: (arg0: { name: string } | null) => void
) => {
  const user = auth.currentUser;
  if (!user) {
    next({ name: "Login" });
  } else {
    next(null);
  }
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Logup",
    name: "Logup",
    component: Logup,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
