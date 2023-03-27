//Agregar tareas
const input = document.querySelector("#input");
const addBtn = document.querySelector("#addTask");
const listTask = document.querySelector("#ul");
const empty = document.querySelector(".empty");
const form = document.querySelector("#formulario");
//Eliminar tareas
const deleteListBtn = document.querySelector("#delete-btn");
let taskId = 1;
let selectedTasks = []; // Almacenar tareas seleccionadas

form.addEventListener("submit", handleSubmit);
listTask.addEventListener("change", handleCheckTask);
deleteListBtn.addEventListener("click", handleDelete);

function handleSubmit(event) {
  event.preventDefault();
  const text = input.value;
  if (text !== "") {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.textContent = text;
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.textContent = "";
    inputCheckbox.id = "check";
    li.appendChild(inputCheckbox);
    li.appendChild(label);
    listTask.appendChild(li);
    li.setAttribute("data-id", taskId);
    input.value = "";
    taskId++;
  }
}

function handleCheckTask(event) {
  const tarea = event.target;

  if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
    // Verificar si el evento es de un checkbox
    const taskLi = event.target.parentElement;
    const completed = event.target.checked;
    taskLi.classList.toggle("is-completed", completed);

    // Almacenar tareas seleccionadas
    if (completed) {
      selectedTasks.push(taskLi);
    } else {
      selectedTasks = selectedTasks.filter((task) => task !== taskLi);
    }
  }
}

function handleDelete() {
  // Eliminar tareas seleccionadas
  selectedTasks.forEach((task) => task.remove());
}
