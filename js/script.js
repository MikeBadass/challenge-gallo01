let resp = "";
let perguntaAtualIndex = 0;
let animalFinal = "";

const perguntas = [
    "Seu animal é um Mamífero?",
    "Seu animal é um Quadrúpede?",
    "Seu animal é Carnívoro?",
    "Seu animal é Herbívoro?",
    "Seu animal é um Bípede?",
    "Seu animal é Onívoro?",
    "Seu animal é Frugívoro?",
    "Seu animal é Voador?",
    "Seu animal é Aquático?",
    "Seu animal é uma Ave?",
    "Seu animal é Não Voador?",
    "Seu animal é Polar?",
    "Seu animal é Nadador?",
    "Seu animal é de Rapina?",
    "Seu animal é um Réptil?",
    "Seu animal tem casco?",
    "Seu animal é sem patas?",
    "Não sei qual é o animal!"
];

const animais = [
    "Leão",
    "Cavalo",
    "Homem",
    "Macaco",
    "Morcego",
    "Baleia",
    "Avestruz",
    "Pinguim",
    "Pato",
    "Águia",
    "Tartaruga",
    "Crocodilo",
    "Cobra"
];

//Aqui controla em qual pergunta está e se chegou em um animal especifico e quando ele adivinhar o animal os botões de sim e não são desativados e só vão voltar quando o algoritino for reiniciado
function MostrarPergunta() {
    if (perguntaAtualIndex < perguntas.length) {
        document.getElementById("exibir-pergunta").innerHTML = perguntas[perguntaAtualIndex];
    } else {
        document.getElementById("exibir-pergunta").innerHTML = "Resposta: " + animalFinal;
        document.getElementById("btn-sim").disabled = true;
        document.getElementById("btn-nao").disabled = true;
    }
}

//Respostas dos botões
function RespSim() {
    resp = "sim";
    perguntaAtualIndex++;
    Perguntar();
}

function RespNao() {
    resp = "nao";
    perguntaAtualIndex++;
    Perguntar();
}

function Perguntar(){

    //Aqui ele faria as comparasões se é sim ou não e daria o resultado final

}

//Aqui ele reinicia o algoritimo
function reiniciar() {
    perguntaAtualIndex = 0;
    resp = "";
    animalFinal = "";
    MostrarPergunta();
    document.getElementById("btn-sim").disabled = false;
    document.getElementById("btn-nao").disabled = false;
}

MostrarPergunta();

document.getElementById("btn-sim").addEventListener("click", RespSim);
document.getElementById("btn-nao").addEventListener("click", RespNao);
document.getElementById("btn-reiniciar").addEventListener("click", reiniciar);
