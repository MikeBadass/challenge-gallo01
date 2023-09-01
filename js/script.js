let resp = "";

        function RespSim() {
            resp = "sim";
            document.getElementById("exibir-resposta").innerHTML = "Resposta: " + resp;
            Pergunta();
        }

        function RespNao() {
            resp = "nao";
            document.getElementById("exibir-resposta").innerHTML = "Resposta: " + resp;
            Pergunta();
        }

        //Primeira exibir-pergunta
        document.getElementById("exibir-pergunta").innerHTML = "O animal é um Mamífero?";

        function Pergunta() {

            if (resp === "sim") {
                document.getElementById("exibir-pergunta").innerHTML = "O animal é um Quadrúpede? ";
                if (resp === "sim") {
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é Carnívoro? ";
        
        
                    if (resp === "sim") {
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é o Leão!";
                    }
                    else if (resp === "nao") {
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é Herbívoro? ";
        
        
                        if (resp === "sim") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é o Cavalo!";
                        }
                    }
                }
                else if (resp === "nao") {
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é um Bípede? ";
        
        
                    if (resp === "sim") {
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é Onívoro? ";
        
        
                        if (resp === "sim") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é o Homem!";
                        }
                        else if (resp === "nao") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é Frugívoro? ";
        
        
                            if (resp === "sim") {
                                document.getElementById("exibir-pergunta").innerHTML = "O animal é o Macaco!";
                            }
                        }
                    }
                    else if (resp === "nao") {
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é Voador? ";
        
        
                        if (resp === "sim") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é o Morcego!";
                        }
                        else if (resp === "nao") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é Aquático? ";
        
        
                            if (resp === "sim") {
                                document.getElementById("exibir-pergunta").innerHTML = "O animal é a Baleia!";
                            }
                        }
                    }
                }
            }
            else if (resp === "nao") {
                document.getElementById("exibir-pergunta").innerHTML = "O animal é uma Ave? ";
        
        
                if (resp === "sim") {
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é naoão Voador? ";
        
        
                    if (resp === "sim") {
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é Tropical? ";
        
        
                        if (resp === "sim") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é o Avestruz!";
                        }
                        else if (resp === "nao") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é Polar? ";
        
        
                            if (resp === "sim") {
                                document.getElementById("exibir-pergunta").innerHTML = "O animal é o Pinguim!";
                            }
                        }
                    }
                    else if (resp === "nao") {
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é naoadador? ";
        
        
                        if (resp === "sim") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é o Pato!";
                        }
                        else if (resp === "nao") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é de Rapina? ";
        
        
                            if (resp === "sim") {
                                document.getElementById("exibir-pergunta").innerHTML = "O animal é a Águia";
                            }
                        }
                    }
                }
                else if (resp === "nao") {
                    document.getElementById("exibir-pergunta").innerHTML = "O animal é um Réptil? ";
        
        
                    if (resp === "sim") {
                        document.getElementById("exibir-pergunta").innerHTML = "O animal tem casco? ";
        
        
                        if (resp === "sim") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é a Tartaruga!";
                        }
                    }
                    else if (resp === "nao") {
                        document.getElementById("exibir-pergunta").innerHTML = "O animal é Carnívoro? ";
        
        
                        if (resp === "sim") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é o Crocodilo";
                        }
                        else if (resp === "nao") {
                            document.getElementById("exibir-pergunta").innerHTML = "O animal é sem patas? ";
        
        
                            if (resp === "sim") {
                                document.getElementById("exibir-pergunta").innerHTML = "O animal é a Cobra!";
                            }
                        }
                    }
                }
            }
        }

        document.getElementById("btn-sim").addEventListener("click", RespSim);
        document.getElementById("btn-nao").addEventListener("click", RespNao);