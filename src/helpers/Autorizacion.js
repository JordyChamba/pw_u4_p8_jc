export function obtenerPaginasPermitidas(usuario) {
  let arreglo;
  if (usuario === "admin") {
    //obtendre las paginas del admin
    arreglo = ["/about", "/Estudiante", "/NotasIngreso", "/403", "/home"];
    //deber consultar rutas. una lista de objetos pagina
  }
  if (usuario === "estudiante") {
    //obtener las paginas de estudiante
    arreglo = ["/about", "/Estudiante", "/403", "/home"];
  }
  return arreglo;
}
