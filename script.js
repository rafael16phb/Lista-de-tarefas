const input = document.querySelector("input")
const addButton = document.querySelector(".adicionar")
const tarefasContainer = document.querySelector("#tarefas")
let tarefas = []

addButton.addEventListener("click", addTarefa)

function addTarefa() {
  tarefas.push(input.value)
  input.value = ""
  imprimirTarefa()
}
function removerDiv(event) {
  const textoSelecionado = event.target.parentElement.firstChild.innerText
  tarefas = tarefas.filter((tarefa) => tarefa !== textoSelecionado)
  imprimirTarefa()
}

function imprimirTarefa() {
  tarefasContainer.innerHTML = ""
  for (let index = 0; index < tarefas.length; index++) {
    const tarefa = tarefas[index]
    const divTarefa = document.createElement("div")
    const textoTarefa = document.createElement("p")
    const buttonRemover = document.createElement("button")
    buttonRemover.addEventListener("click", removerDiv)
    buttonRemover.innerText = "🗑️"
    divTarefa.className = "lista"
    textoTarefa.innerText = tarefa
    divTarefa.appendChild(textoTarefa)
    divTarefa.appendChild(buttonRemover)
    tarefasContainer.appendChild(divTarefa)
  }
}
const buttonLimpar = document.querySelector(".limpar")
buttonLimpar.addEventListener("click", limpar)
function limpar() {
  tarefasContainer.innerHTML = ""
  tarefas = []
}
