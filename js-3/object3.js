let receta = {
  nombre: "Sandwich",
  ingredientes: [
    {
      nombre: "Pan",
      cantidad: 2,
    },
    { nombre: "Queso", cantidad: 1 },
  ],
};
console.log(receta.ingredientes[0].nombre);
let sumaingredientes = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
  sumaingredientes += receta.ingredientes[i].cantidad;
}
console.log(sumaingredientes);
