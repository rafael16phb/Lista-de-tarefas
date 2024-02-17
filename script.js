const input = document.querySelector("input");
const addButton = document.querySelector(".adicionar");
const tarefasContainer = document.querySelector("#tarefas");
const teste = document.getElementsByClassName(".teste");
let tarefas = [];

addButton.addEventListener("click", addTarefa);

function addTarefa() {
  tarefas.push(input.value);
  imprimirTarefa();
  input.value = "";
}

function imprimirTarefa() {
  for (let index = 0; index < tarefas.length; index++) {
    const tarefa = tarefas[index];

    const textoTarefa = document.createElement("p");
    textoTarefa.innerText = tarefa;
    teste.appendChild(textoTarefa);
  }
}
