const input = document.querySelector("input");
const addButton = document.querySelector(".adicionar");
const tarefasContainer = document.querySelector("#tarefas");
let tarefas = [];

addButton.addEventListener("click", addTarefa);

function addTarefa() {
  tarefas.push(input.value);
  input.value = "";
  imprimirTarefa();
}

function imprimirTarefa() {
  tarefasContainer.innerHTML = "";
  for (let index = 0; index < tarefas.length; index++) {
    const tarefa = tarefas[index];

    const textoTarefa = document.createElement("p");
    textoTarefa.innerText = tarefa;
    tarefasContainer.appendChild(textoTarefa);
  }
}
