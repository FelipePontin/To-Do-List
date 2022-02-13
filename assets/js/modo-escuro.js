const modoEscuro = document.querySelector(".modo-escuro");
const inputModoEscuro = document.querySelector("input[name=modo-escuro]")

inputModoEscuro.addEventListener("change", () => {
    if (inputModoEscuro.checked) {
        document.documentElement.setAttribute("data-theme", "dark")
        modoEscuro.classList.add("modo-escuro-ativo")
    }
    else {
        document.documentElement.setAttribute("data-theme", "light")
        modoEscuro.classList.remove("modo-escuro-ativo")
    }
})