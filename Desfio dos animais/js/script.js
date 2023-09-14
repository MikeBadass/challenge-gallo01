var resp = "";
var final = false;

//Respostas dos botões
function RespSim() {
    resp = "sim";
    console.log("Resposta: Sim");
    resp = "";
    console.log("Resposta Resetada");
    Perguntar()
}

function RespNao() {
    resp = "nao";
    console.log("Resposta: Não");
    resp = "";
    console.log("Resposta Resetada");

}

function Perguntar() {

    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Mamifero?";
    if (resp == "sim") {

        document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Quadrupede?";
        if (resp == "sim") {

            document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Carnivoro?";
            if (resp == "sim") {
                //Resposta Final
                document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é o Leão!";
                final = true;
            }
            else if (resp == "nao") {
                document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Herbívoro?";
                if (resp == "sim") {
                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é o Cavalo!";
                    final = true;
                }
            }
        }
        else if (resp == "nao") {

            document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Bípede?";
            if (resp == "sim") {

                document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Onívoro?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é o Homem!";
                    final = true;
                }
                else if (resp == "nao") {

                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Frugivoro?";
                    if (resp == "sim") {

                        //Resposta Final
                        document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é o Macaco!";
                        final = true;
                    }
                }
            }
            else if (resp == "nao") {

                document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Voador?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é o Morcego!";
                    final = true;
                }
                else if (resp == "nao") {

                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Aquático?";
                    if (resp == "sim") {

                        //Resposta Final
                        document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é a Baleia!";
                        final = true;
                    }
                }
            }
        }
    }
    else if (resp == "nao") {

        document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é uma Ave?";
        if (resp == "sim") {

            document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Não-voador?";
            if (resp == "sim") {

                document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Tropical?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Pergunta: O avestruz!";
                    final = true;
                }
                else if (resp == "nao") {

                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Polar?";
                    if (resp == "sim") {

                        //Resposta Final
                        document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é o Pinguim!";
                        final = true;
                    }
                }
            }
            else if (resp == "nao") {

                document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Nadador?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é o Pinguim!";
                    final = true;
                }
                else if (resp == "nao") {

                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é de Rapina?";
                    if (resp == "sim") {

                        //Resposta Final
                        document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é a Águia";
                        final = true;
                    }
                }
            }
        }
        else if (resp == "nao") {

            document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é um Réptil?";
            if (resp == "sim") {

                document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal tem casco?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é a Tartaruga";
                    final = true;
                }
            }
            else if (resp == "nao") {

                document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é Carnívoro?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é o Crocodilo";
                    final = true;
                }
                else if (resp == "nao") {

                    document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é não tem patas?";
                    if (resp == "sim") {

                        //Resposta Final
                        document.getElementById("exibir-pergunta").innerHTML = "Pergunta: O animal é a Cobra";
                        final = true;
                    }
                }
            }
        }
    }
}

//Aqui ele reinicia o algoritimo
function reiniciar() {
    resp = "";
    Perguntar();
}

do {
    Perguntar();
} while (final = true)

