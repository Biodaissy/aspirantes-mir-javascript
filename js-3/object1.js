let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};
console.log(pedro.edad);
pedro.estatura = 1.8;
delete pedro.activo;
let llaves = Object.keys(pedro);
for (let i = 0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(llave + ": " + pedro[llave]);
}
pedro.saluda = function () {
  console.log("Hola, me llamo " + this.nombre);
};

pedro.saluda(); // "Hola, me llamo Pedro"
