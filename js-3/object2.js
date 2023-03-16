let persona = {
  nombre: "Paco",
  edad: 10,
  ciudad: "Palmira",
  profesion: "Ing",
};
console.log(persona);
function presentacion(persona) {
  return (
    persona.nombre +
    " " +
    persona.edad +
    " " +
    persona.ciudad +
    " " +
    persona.profesion
  );
}
let mensaje = presentacion(persona);
console.log(mensaje);
persona.hobbies = ["leer", "dibujar", "musica"];
console.log(persona.hobbies);
console.log(persona);
let llaves = Object.values(persona.hobbies);
for (let i = 0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(llave);
}
