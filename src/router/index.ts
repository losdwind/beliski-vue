import { defineConfig } from 'vite';
import {createRouter, RouteRecordRaw, Router, createWebHistory} from 'vue-router';
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
    next({ name: "AppLogin" });
  } else {
    next(null);
  }
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/Login",
    name: "AppLogin",
    component: Login,
  },
  {
    path: "/Logup",
    name: "AppLogup",
    component: Logup,
  },
  {
    path: "/Home",
    name: "AppHome",
    component: Home,
    // beforeEnter: requireAuth,
  },
];

const router:Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
