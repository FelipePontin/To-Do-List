const alerta = (nome, classe) => {
    nome.classList.add(classe)
        setInterval(() => {
            nome.classList.remove(classe)
        }, 5000)
}

export default alerta
