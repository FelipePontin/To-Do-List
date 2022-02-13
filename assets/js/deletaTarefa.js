import alerta from "./alertas.js"

const btnDeleta = () => {
    const botaoDeleta = document.createElement("button")

    botaoDeleta.classList.add("botao-deletar")
    botaoDeleta.innerHTML = "Deletar"

    botaoDeleta.addEventListener("click", deletaTarefa)

    return botaoDeleta
}

const deletaTarefa = (event) => {
    const botaoDeleta = event.target
    const deleta = botaoDeleta.parentNode.parentNode

    deleta.remove()

    const alertaDeletado = document.querySelector(".alerta-deletado")
    alerta(alertaDeletado, "alerta-deletado-ativo")
}

export default btnDeleta