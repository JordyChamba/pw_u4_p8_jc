import axios from "axios";
// Consultar --> GET
const consultarEstudiante = async (id) => {
  let token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdWNlLmVkdS5lYyIsInVwbiI6Im1pY29ycmVvQHVjZS5lZHUuZWMiLCJncm91cHMiOlsiYWRtaW4iXSwiaWF0IjoxNzUyODk1MTI4LCJleHAiOjE3NTI4OTcwMjgsImp0aSI6IjQ2ZjBiMmIwLWNiMzMtNDMxYS1hMmI5LTQ4ODM0ZGI0OTQ1YyJ9.ceK-uTuEQbVwzKZHQnCbRAZT1s-g8YDVkMVGm-24h4a94s5ILoFO2xIW9b9CQzFvgj8DnNkhjJPc88r5YpDH1jgqttmZKJb8qJAwWkR7aBj5LieQs2Dpdzlj9QTxT4XkB6QUSW92SKZpsSntze9yyP2_R4ywYbbPVtEA6Q2iNK1YGVPsgkZzPHVYOA1sHm_sY1sxu16zMeudcfYeR5b4cTMlEQg747zdIVeaMAzoSH82GT3EeFn73idL9PC9-K8sFgfoqHFdtR2QwGKlEG15DisZoOJGUUOM3wu9ffV9m3eLx4DdnTI-r0NkP_eNCokuKgnZJyXCuTRNybL6PuWfaA`;
  return axios
    .get(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => r.data);
};

// Fachada
export const consultarEstudianteFachada = async (id) => {
  return await consultarEstudiante(id);
};

//Guardar --> public void guardar(@RequestBody EstudianteTo estudianteTo) {
/*
const guardarEstudiante = async (body) => {
  axios
    .post("http://localhost:8081/api/matricula/v1/estudiantes", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => r.data);
};
*/

const guardarEstudiante = async (body) => {
  let token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdWNlLmVkdS5lYyIsInVwbiI6Im1pY29ycmVvQHVjZS5lZHUuZWMiLCJncm91cHMiOlsiYWRtaW4iXSwiaWF0IjoxNzUyODk1MTI4LCJleHAiOjE3NTI4OTcwMjgsImp0aSI6IjQ2ZjBiMmIwLWNiMzMtNDMxYS1hMmI5LTQ4ODM0ZGI0OTQ1YyJ9.ceK-uTuEQbVwzKZHQnCbRAZT1s-g8YDVkMVGm-24h4a94s5ILoFO2xIW9b9CQzFvgj8DnNkhjJPc88r5YpDH1jgqttmZKJb8qJAwWkR7aBj5LieQs2Dpdzlj9QTxT4XkB6QUSW92SKZpsSntze9yyP2_R4ywYbbPVtEA6Q2iNK1YGVPsgkZzPHVYOA1sHm_sY1sxu16zMeudcfYeR5b4cTMlEQg747zdIVeaMAzoSH82GT3EeFn73idL9PC9-K8sFgfoqHFdtR2QwGKlEG15DisZoOJGUUOM3wu9ffV9m3eLx4DdnTI-r0NkP_eNCokuKgnZJyXCuTRNybL6PuWfaA`;
  axios
    .post(`http://localhost:8081/api/matricula/v1/estudiantes`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => r.data);
};

//fachada
export const guardarEstudianteFachada = async (body) => {
  await guardarEstudiante(body);
};

//Actualizar -->  public void actualizarPorId(@RequestBody EstudianteTo estudianteTo, @PathParam("id") Integer id)
const actualizarEstudiante = async (body, id) => {
  let token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdWNlLmVkdS5lYyIsInVwbiI6Im1pY29ycmVvQHVjZS5lZHUuZWMiLCJncm91cHMiOlsiYWRtaW4iXSwiaWF0IjoxNzUyODk1MTI4LCJleHAiOjE3NTI4OTcwMjgsImp0aSI6IjQ2ZjBiMmIwLWNiMzMtNDMxYS1hMmI5LTQ4ODM0ZGI0OTQ1YyJ9.ceK-uTuEQbVwzKZHQnCbRAZT1s-g8YDVkMVGm-24h4a94s5ILoFO2xIW9b9CQzFvgj8DnNkhjJPc88r5YpDH1jgqttmZKJb8qJAwWkR7aBj5LieQs2Dpdzlj9QTxT4XkB6QUSW92SKZpsSntze9yyP2_R4ywYbbPVtEA6Q2iNK1YGVPsgkZzPHVYOA1sHm_sY1sxu16zMeudcfYeR5b4cTMlEQg747zdIVeaMAzoSH82GT3EeFn73idL9PC9-K8sFgfoqHFdtR2QwGKlEG15DisZoOJGUUOM3wu9ffV9m3eLx4DdnTI-r0NkP_eNCokuKgnZJyXCuTRNybL6PuWfaA `;
  axios
    .put(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => r.data);
};
//fachada
export const actualizarEstudianteFachada = async (body, id) => {
  await actualizarEstudiante(body, id);
};

//ActualizarParcial --> public void actualizarParcial(@RequestBody EstudianteTo estudianteTo, @PathParam("id") Integer id) {
const actualizarParcialEstudiante = async (body, id) => {
  let token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdWNlLmVkdS5lYyIsInVwbiI6Im1pY29ycmVvQHVjZS5lZHUuZWMiLCJncm91cHMiOlsiYWRtaW4iXSwiaWF0IjoxNzUyODk1MTI4LCJleHAiOjE3NTI4OTcwMjgsImp0aSI6IjQ2ZjBiMmIwLWNiMzMtNDMxYS1hMmI5LTQ4ODM0ZGI0OTQ1YyJ9.ceK-uTuEQbVwzKZHQnCbRAZT1s-g8YDVkMVGm-24h4a94s5ILoFO2xIW9b9CQzFvgj8DnNkhjJPc88r5YpDH1jgqttmZKJb8qJAwWkR7aBj5LieQs2Dpdzlj9QTxT4XkB6QUSW92SKZpsSntze9yyP2_R4ywYbbPVtEA6Q2iNK1YGVPsgkZzPHVYOA1sHm_sY1sxu16zMeudcfYeR5b4cTMlEQg747zdIVeaMAzoSH82GT3EeFn73idL9PC9-K8sFgfoqHFdtR2QwGKlEG15DisZoOJGUUOM3wu9ffV9m3eLx4DdnTI-r0NkP_eNCokuKgnZJyXCuTRNybL6PuWfaA`;
  axios
    .patch(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => r.data);
};
//fachada
export const actualizarParcialEstudianteFachada = async (body, id) => {
  await actualizarParcialEstudiante(body, id);
};

//Borrar --> public void borrarPorId(@PathParam("id") Integer id) {
const borrarEstudiante = async (id) => {
  let token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdWNlLmVkdS5lYyIsInVwbiI6Im1pY29ycmVvQHVjZS5lZHUuZWMiLCJncm91cHMiOlsiYWRtaW4iXSwiaWF0IjoxNzUyODk1MTI4LCJleHAiOjE3NTI4OTcwMjgsImp0aSI6IjQ2ZjBiMmIwLWNiMzMtNDMxYS1hMmI5LTQ4ODM0ZGI0OTQ1YyJ9.ceK-uTuEQbVwzKZHQnCbRAZT1s-g8YDVkMVGm-24h4a94s5ILoFO2xIW9b9CQzFvgj8DnNkhjJPc88r5YpDH1jgqttmZKJb8qJAwWkR7aBj5LieQs2Dpdzlj9QTxT4XkB6QUSW92SKZpsSntze9yyP2_R4ywYbbPVtEA6Q2iNK1YGVPsgkZzPHVYOA1sHm_sY1sxu16zMeudcfYeR5b4cTMlEQg747zdIVeaMAzoSH82GT3EeFn73idL9PC9-K8sFgfoqHFdtR2QwGKlEG15DisZoOJGUUOM3wu9ffV9m3eLx4DdnTI-r0NkP_eNCokuKgnZJyXCuTRNybL6PuWfaA`;
  axios
    .delete(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => r.data);
};
//fachada
export const borrarEstudianteFachada = async (id) => {
  await borrarEstudiante(id);
};
