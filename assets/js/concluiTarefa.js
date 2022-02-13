const btnConclui = () => {
    const botaoConclui = document.createElement("button")

    botaoConclui.classList.add("botao-concluir")
    botaoConclui.innerHTML = "Concluir"

    botaoConclui.addEventListener("click", concluiTarefa)

    return botaoConclui
}

const concluiTarefa = (event) => {
    const botaoConclui = event.target
    const conclui = botaoConclui.parentNode.parentNode.firstElementChild

    conclui.classList.toggle("tarefa-concluida")
}

export default btnConclui