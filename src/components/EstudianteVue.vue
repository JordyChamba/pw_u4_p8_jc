<template>
  <div class="container">
    <h2>Gestión de Estudiantes</h2>

    <form @submit.prevent="guardar">
      <div>
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          v-model="estudianteForm.nombre"
          required
        />
      </div>
      <div>
        <label for="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          v-model="estudianteForm.apellido"
          required
        />
      </div>
      <div>
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="fechaNacimiento"
          v-model="estudianteForm.fechaNacimiento"
          required
        />
      </div>
      <div>
        <label for="genero">Género:</label>
        <select id="genero" v-model="estudianteForm.genero" required>
          <option value="">Seleccione</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </div>

      <button type="submit">Guardar</button>
    </form>

    <br />

    <button @click="consultar">Consultar</button>
    <button @click="actualizar">Actualizar</button>
    <button @click="actualizarParcial">Actualizar Parcial</button>
    <button @click="borrar">Borrar</button>

    <p v-if="mensaje">{{ mensaje }}</p>

    <div v-if="estudiante">
      <h3>Datos del Estudiante</h3>
      <p>Nombre: {{ estudiante.nombre }}</p>
      <p>Apellido: {{ estudiante.apellido }}</p>
      <p>Fecha Nacimiento: {{ estudiante.fechaNacimiento }}</p>
      <p>Género: {{ estudiante.genero }}</p>
    </div>
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
      estudianteForm: {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        genero: "",
      },
    };
  },
  methods: {
    async consultar() {
      try {
        this.estudiante = await consultarEstudianteFachada(1);
        console.log("Estudiante consultado:", this.estudiante);

        if (this.estudiante) {
          this.mensaje = "Estudiante cargado correctamente";
        } else {
          this.mensaje = "No se encontró el estudiante";
        }
      } catch (error) {
        console.error("Error al consultar estudiante:", error);
        this.mensaje = "Error al consultar el estudiante";
        this.estudiante = null;
      }
    },
    async guardar() {
      const estudianteToBody = {
        nombre: this.estudianteForm.nombre,
        apellido: this.estudianteForm.apellido,
        fechaNacimiento: this.estudianteForm.fechaNacimiento + "T00:00:00",
        genero: this.estudianteForm.genero,
      };
      await guardarEstudianteFachada(estudianteToBody);
      this.mensaje = "Estudiante guardado correctamente";
    },
    async actualizar() {
      const estudianteToBody = {
        nombre: this.estudianteForm.nombre,
        apellido: this.estudianteForm.apellido,
        fechaNacimiento: this.estudianteForm.fechaNacimiento + "T00:00:00",
        genero: this.estudianteForm.genero,
      };
      await actualizarEstudianteFachada(estudianteToBody, 1);
      this.mensaje = "Estudiante actualizado correctamente";
    },
    async actualizarParcial() {
      const estudianteToBody = {
        apellido: this.estudianteForm.apellido,
      };
      await actualizarParcialEstudianteFachada(estudianteToBody, 1);
      this.mensaje = "Estudiante actualizado parcialmente";
    },
    async borrar() {
      await borrarEstudianteFachada(1);
      this.mensaje = "Estudiante eliminado";
      this.estudiante = null;
    },
  },
};
</script>

<style>
.container {
  width: 400px;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
}

form div {
  margin-bottom: 15px;
}

form label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
}

form input,
form select {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}

button {
  margin: 5px 2px;
  padding: 5px 10px;
}
</style>
