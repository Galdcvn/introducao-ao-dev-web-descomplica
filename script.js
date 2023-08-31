const entrar = document.getElementById("entrar")
const sair = document.getElementById("sair")
const input = document.getElementById("name")

entrar.addEventListener('click', () => {
    const valorInput = input.value
    
    document.getElementById("result").innerHTML = `Bem vindo, ${valorInput}!` 

    input.value = ""
})
sair.addEventListener('click', () => {
    
    document.getElementById("result").innerHTML = ""
})
