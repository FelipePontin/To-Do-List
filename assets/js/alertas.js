const alerta = (nome, classe) => {
    nome.classList.add(classe)
        setTimeout(() => {
            nome.classList.remove(classe)
        }, 5000)
}

export default alerta