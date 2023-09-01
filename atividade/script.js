var numeroAleatorio = Math.floor(Math.random() * 100)

function Comparar() {
    let numero = Number(document.getElementById('numero').value)

    let h2 = document.querySelector('h2')

    if (numero == numeroAleatorio) {
        h2.innerHTML = "Você acertou o número"
    } else if (numero < numeroAleatorio) {
        h2.innerHTML = "Você chutou muito baixo"
    } else {
        h2.innerHTML = "Você chutou muito alto"
    }
}
