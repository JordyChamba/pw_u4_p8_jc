import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EstudianteView from "@/views/EstudianteView.vue";
import LoginView from "@/views/LoginView.vue";
import AboutView from "@/views/AboutView.vue";
import NotasIngresoView from "@/views/NotasIngresoView.vue";
import RecursoProhibidoView from "@/views/RecursoProhibidoView.vue";

import { obtenerPaginasPermitidas } from "../helpers/Autorizacion";

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
    meta: {
      requireAuth: true, //protegida
    },
  },
  {
    path: "/Login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
    meta: {
      requireAuth: true, //protegida
    },
  },
  {
    path: "/403",
    name: "RecursoProhibidoView",
    component: RecursoProhibidoView,
    meta: {
      requireAuth: true, //protegida
    },
  },
  {
    path: "/NotasIngreso",
    name: "NotasIngresoView",
    component: NotasIngresoView,
    meta: {
      requireAuth: true, //protegida
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//Aqui se construye el guardian
//hacia donde va (to) - de donde viene (from) - a cual le quiero redirigir (next)
router.beforeEach((to, from, next) => {
  console.log("antes");
  //Validando si la pagina debe ser autenticada (true)
  if (to.meta.requireAuth) {
    console.log("auth");
    //Si no esta autenticado
    if (!estaAutenticado()) {
      console.log("exito");
      next("/Login");
    } else {
      //aqui esta entrando a ser autenticado. linea 88
      //Aqui valido si esta autorizado
      let usuario = localStorage.getItem("usuario");
      let paginas = obtenerPaginasPermitidas(usuario);
      if (paginas.includes(to.path)) {
        next();
      } else {
        next("/403");
      }
      next();
    }
  } else {
    next();
  }
});

export default router;
