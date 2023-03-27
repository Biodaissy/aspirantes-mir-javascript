// Obtener elementos del DOM
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const section = document.querySelector("#section");
const btnGuardar = document.querySelector("#Guardar");
const btnEliminar = document.querySelector("#Eliminar");

// Manejar el evento de enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameAdd = input.value;
  localStorage.setItem("name", nameAdd);
  console.log(nameAdd);
  showName();
});

// Función para mostrar el nombre guardado en localStorage
function showName() {
  const nameSaved = document.createElement("p");
  section.appendChild(nameSaved);
  const textSaved = localStorage.getItem("name");
  nameSaved.textContent = textSaved;
  if (!textSaved) {
    alert("No hay datos");
  }
}

// Función para borrar el nombre guardado en localStorage
btnEliminar.addEventListener("click", deleteName);
function deleteName() {
  localStorage.removeItem("name");
}

// Mostrar el nombre guardado al cargar la página
window.onload = iniciar;
function iniciar() {
  showName();
}
