var resp = "";

//Respostas dos botões
function RespSim() {
    resp = "sim"
    console.log("Resposta: Sim");
    resp = ""
    console.log("Resposta Resetada");
}

function RespNao() {
    resp = "nao"
    console.log("Resposta: Não");
    resp = ""
    console.log("Resposta Resetada");
}

function Perguntar() {

    document.getElementById("exibir-pergunta").innerHTML = "O animal é Mamifero?";
    if (resp == "sim") {

        document.getElementById("exibir-pergunta").innerHTML = "O animal é Quadrupede?";
        if (resp == "sim") {

            document.getElementById("exibir-pergunta").innerHTML = "O animal é Carnivoro?";
            if (resp == "sim") {
                //Resposta Final
                document.getElementById("exibir-pergunta").innerHTML = "O animal é o Leão!";
            }
            else if (resp == "nao") {
                document.getElementById("exibir-pergunta").innerHTML = "O animal é Herbívoro?";
                if (resp == "sim") {
                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é o Cavalo!";
                }
            }
        }
        else if (resp == "nao") {

            document.getElementById("exibir-pergunta").innerHTML = "O animal é Bípede?";
            if (resp == "sim") {

                document.getElementById("exibir-pergunta").innerHTML = "O animal é Onívoro?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é o Homem!";
                }
                else if (resp == "nao") {

                    document.getElementById("exibir-pergunta").innerHTML = "O animal é Frugivoro?";
                    if (resp == "sim") {

                        //Resposta Final
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é o Macaco!";
                    }
                }
            }
            else if (resp == "nao") {

                document.getElementById("exibir-pergunta").innerHTML = "O animal é Voador?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é o Morcego!";
                }
                else if (resp == "nao") {

                    document.getElementById("exibir-pergunta").innerHTML = "O animal é Aquático?";
                    if (resp == "sim") {

                        //Resposta Final
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é a Baleia!";
                    }
                }
            }
        }
    }
    else if (resp == "nao") {

        document.getElementById("exibir-pergunta").innerHTML = "O animal é uma Ave?";
        if (resp == "sim") {

            document.getElementById("exibir-pergunta").innerHTML = "O animal é Não-voador?";
            if (resp == "sim") {

                document.getElementById("exibir-pergunta").innerHTML = "O animal é Tropical?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é o Avestruz!";
                }
                else if (resp == "nao") {

                    document.getElementById("exibir-pergunta").innerHTML = "O animal é Polar?";
                    if (resp == "sim") {

                        //Resposta Final
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é o Pinguim!";
                    }
                }
            }
            else if (resp == "nao") {

                document.getElementById("exibir-pergunta").innerHTML = "O animal é Nadador?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é o Pinguim!";
                }
                else if (resp == "nao") {

                    document.getElementById("exibir-pergunta").innerHTML = "O animal é de Rapina?";
                    if (resp == "sim") {

                        //Resposta Final
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é a Águia";
                    }
                }
            }
        }
        else if (resp == "nao") {

            document.getElementById("exibir-pergunta").innerHTML = "O animal é um Réptil?";
            if (resp == "sim") {

                document.getElementById("exibir-pergunta").innerHTML = "O animal tem casco?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é a Tartaruga";
                }
            }
            else if (resp == "nao") {

                document.getElementById("exibir-pergunta").innerHTML = "O animal é Carnívoro?";
                if (resp == "sim") {

                    //Resposta Final
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é o Crocodilo";
                }
                else if (resp == "nao") {

                    document.getElementById("exibir-pergunta").innerHTML = "O animal é não tem patas?";
                    if (resp == "sim") {

                        //Resposta Final
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é a Cobra";
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

Perguntar();
