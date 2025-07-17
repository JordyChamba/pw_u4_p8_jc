import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EstudianteView from "@/views/EstudianteView.vue";
import LoginView from "@/views/LoginView.vue";

function estaAutenticado() {
  let resul = localStorage.getItem("auth") === "true";
  console.log(resul);
  return resul;
}

const routes = [
  //se aumento un metadata: requireAuth
  //Para proteger rutas en Vue: Guardianes

  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      requireAuth: true, //protegida
    },
  },
  {
    path: "/Estudiante",
    name: "EstudianteView",
    component: EstudianteView,
  },
  {
    path: "/Login",
    name: "LoginView",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//Aqui se construye el guardian
//hacia donde va (to) - de donde viene (from) -
router.beforeEach((to, from, next) => {
  console.log("antes");
  if (to.meta.requireAuth) {
    console.log("auth");
    //Si no esta autenticado
    if (!estaAutenticado()) {
      console.log("exito");
      next("/Login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
