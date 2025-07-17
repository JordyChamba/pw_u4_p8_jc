<template>
  <div class="container">
    <h2>Gestión de Estudiantes</h2>
    <button v-on:click="consultar()">Consultar</button>
    <button v-on:click="guardar()">Guardar</button>
    <button v-on:click="actualizar()">Actualizar</button>
    <button v-on:click="actualizarParcial()">ActualizarParcial</button>
    <button v-on:click="borrar()">Borrar</button>
    <p v-if="mensaje">{{ mensaje }}</p>
    <p v-if="estudiante">Nombre: {{ estudiante.nombre }}</p>
    <p v-if="estudiante">Apellido: {{ estudiante.apellido }}</p>
    <p v-if="estudiante">Fecha Nacimiento: {{ estudiante.fechaNacimiento }}</p>
    <p v-if="estudiante">Genero: {{ estudiante.genero }}</p>
  </div>
</template>

<script>
import { guardarEstudianteFachada } from "../clients/EstudianteClients";
import { actualizarEstudianteFachada } from "../clients/EstudianteClients";
import { actualizarParcialEstudianteFachada } from "../clients/EstudianteClients";
import { borrarEstudianteFachada } from "../clients/EstudianteClients";
import { consultarEstudianteFachada } from "../clients/EstudianteClients";
export default {
  data() {
    return {
      estudiante: null,
      mensaje: "Componente cargado correctamente",
    };
  },
  methods: {
    async consultar() {
      this.estudiante = await consultarEstudianteFachada(1);
      console.log(this.estudiante);
    },
    //private Integer id;
    //private String nombre;
    //private String apellido;
    //private LocalDateTime fechaNacimiento;
    //private String genero;
    async guardar() {
      let fecha = "1998-11-25";
      const estudianteToBody = {
        nombre: "Jordy",
        apellido: "Chamba",
        fechaNacimiento: "1998-11-25T00:00:00",
        genero: "M",
      };
      await guardarEstudianteFachada(estudianteToBody);
    },
    async actualizar() {
      let fecha = "2005-11-25";
      const estudianteToBody = {
        nombre: "Jordy",
        apellido: "Romero",
        fechaNacimiento: fecha + "T00:00:00",
        genero: "M",
      };
      await actualizarEstudianteFachada(estudianteToBody, 1);
    },
    async actualizarParcial() {
      const estudianteToBody = {
        apellido: "Carrion",
      };
      await actualizarParcialEstudianteFachada(estudianteToBody, 1);
    },
    async borrar() {
      await borrarEstudianteFachada(1);
    },
  },
};
</script>

<style></style>
