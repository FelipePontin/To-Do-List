import btnConclui from "./concluiTarefa.js"
import btnDeleta from "./deletaTarefa.js"
import alerta from "./alertas.js"

const inputTarefa = document.querySelector(".input-tarefa")
const listaTarefa = document.querySelector(".lista-tarefas")
const alertaCampo = document.querySelector(".alerta-campo")
const calendario = document.querySelector(".input-data")

const adicionaTarefa = (event) => {
    event.preventDefault()

    const tarefa = inputTarefa.value;

    const data = moment(calendario.value).format("DD/MM/YYYY H:MM")

    if (tarefa == "" || data == "Invalid date") {
        alerta(alertaCampo, "alerta-campo-ativo")
    }
    else {
        const divisaoTarefa = document.createElement("li")
        divisaoTarefa.classList.add("tarefa")

        const divisaoBotoes = document.createElement("div")
        divisaoBotoes.classList.add("divisao-botoes")

        divisaoTarefa.innerHTML =
            `<span class="nome-tarefa">
                <span class="data-tarefa">${data}</span>
                <p class="nome-tarefa">${tarefa}</p>
            </span>`

        listaTarefa.appendChild(divisaoTarefa)
        divisaoTarefa.appendChild(divisaoBotoes)
        divisaoBotoes.appendChild(btnConclui())
        divisaoBotoes.appendChild(btnDeleta())

        inputTarefa.value = ""
    }
}

const btnAdiciona = document.querySelector(".botao-adiciona-tarefa")

btnAdiciona.addEventListener("click", adicionaTarefa)
