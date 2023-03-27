//Agregar tareas
const input = document.querySelector("#input");
const addBtn = document.querySelector("#addTask");
const listTask = document.querySelector("#ul");
const empty = document.querySelector(".empty");
const form = document.querySelector("#formulario");

//Eliminar tareas
// const deleteTaskBtn = document.querySelector("#deleteTask");
const deleteListBtn = document.querySelector("#delete-btn");
let taskId = 1;
form.addEventListener("submit", handleSubmit);
// listTask.addEventListener("change", handleCheckTask);
// deleteListBtn.addEventListener("click", handleDelete);

function handleSubmit(event) {
  event.preventDefault();
  const text = input.value;
  if (text !== "") {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.textContent = text;
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    // inputCheckbox.textContent = "";
    inputCheckbox.className = "checkbox";
    inputCheckbox.id = "check-" + taskId;
    li.appendChild(inputCheckbox);
    li.appendChild(label);
    listTask.appendChild(li);
    li.setAttribute("data-id", taskId);
    input.value = "";
    taskId++;
  }
}

// function handleCheckTask(event) {
//   const tarea = event.target;

//   listTask.addEventListener("change", function (event) {
//     if (event.target.listTask.contains("inputCheckbox")) {
//       const taskLi = event.target.parentElement;
//       const completed = event.target.checked;
//       taskLi.listTask.toggle("is-completed", completed);
//     }
//   });
// }

function handleDelete() {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkbox.parentElement.remove();
    }
  });
}

listTask.addEventListener("change", function (event) {
  const checkbox = event.target;
  if (checkbox.className === "checkbox") {
    const taskLi = checkbox.parentElement;
    const completed = checkbox.checked;
    taskLi.classList.toggle("completed", completed);
  }
});

// //Botón de borrar
// const deleteListBtn = document.querySelector("#delete-btn");
// deleteListBtn.addEventListener("click", handleDelete);
// function handleDelete() {
//   const ul = document.querySelector("ul");
//   ul.innerHTML = "";
// }
