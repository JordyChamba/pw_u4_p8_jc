import axios from "axios";
// Consultar --> GET
const consultarEstudiante = async (id) => {
  return axios
    .get(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`)
    .then((r) => r.data);
};

// Fachada
export const consultarEstudianteFachada = async (id) => {
  return await consultarEstudiante(id);
};

//Guardar --> public void guardar(@RequestBody EstudianteTo estudianteTo) {
const guardarEstudiante = async (body) => {
  axios
    .post("http://localhost:8081/api/matricula/v1/estudiantes", body)
    .then((r) => r.data);
};
//fachada
export const guardarEstudianteFachada = async (body) => {
  await guardarEstudiante(body);
};

//Actualizar -->  public void actualizarPorId(@RequestBody EstudianteTo estudianteTo, @PathParam("id") Integer id)
const actualizarEstudiante = async (body, id) => {
  axios
    .put(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`, body)
    .then((r) => r.data);
};
//fachada
export const actualizarEstudianteFachada = async (body, id) => {
  await actualizarEstudiante(body, id);
};

//ActualizarParcial --> public void actualizarParcial(@RequestBody EstudianteTo estudianteTo, @PathParam("id") Integer id) {
const actualizarParcialEstudiante = async (body, id) => {
  axios
    .patch(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`, body)
    .then((r) => r.data);
};
//fachada
export const actualizarParcialEstudianteFachada = async (body, id) => {
  await actualizarParcialEstudiante(body, id);
};

//Borrar --> public void borrarPorId(@PathParam("id") Integer id) {
const borrarEstudiante = async (id) => {
  axios
    .delete(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`)
    .then((r) => r.data);
};
//fachada
export const borrarEstudianteFachada = async (id) => {
  await borrarEstudiante(id);
};
