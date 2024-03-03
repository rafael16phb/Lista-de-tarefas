const input = document.querySelector("input")
const addButton = document.querySelector(".adicionar")
const tarefasContainer = document.querySelector("#tarefas")
let tarefas = []

let id = 0
addButton.addEventListener("click", addTarefa)

function addTarefa() {
  tarefas.push({ id, texto: input.value })
  id++
  input.value = ""
  imprimirTarefa()
}

function removerDiv(id) {
  tarefas = tarefas.filter((tarefa) => tarefa.id !== id)
  imprimirTarefa()
}

function imprimirTarefa() {
  tarefasContainer.innerHTML = ""
  tarefas.forEach((tarefa, index) => {
    const divTarefa = document.createElement("div")
    const textoTarefa = document.createElement("p")
    const buttonRemover = document.createElement("button")
    buttonRemover.innerText = "🗑️"
    buttonRemover.addEventListener("click", () => removerDiv(tarefa.id))
    divTarefa.className = "lista"
    textoTarefa.innerText = tarefa.texto
    divTarefa.appendChild(textoTarefa)
    divTarefa.appendChild(buttonRemover)
    tarefasContainer.appendChild(divTarefa)
  })
}
const buttonLimpar = document.querySelector(".limpar")
buttonLimpar.addEventListener("click", limpar)
function limpar() {
  tarefasContainer.innerHTML = ""
  tarefas = []
}
