var button = document.querySelector("button")
var valor = Number(document.getElementById("valor").value)


button.addEventListener("click", () => {

    console.log(); ("Seu animal é um Mamífero? [S/N]: ");
    resp = Console.ReadLine().ToUpper();

    if (resp == "S") {
        console.log("Seu animal é um Quadrúpede? [S/N]: ");

        if (resp == "S") {
            console.log("Seu animal é Carnívoro? [S/N]: ");


            if (resp == "S") {
                console.log("Seu animal é o Leão!");
            }
            else if (resp == "N") {
                console.log("Seu animal é Herbívoro? [S/N]: ");

                if (resp == "S") {
                    console.log("Seu animal é o Cavalo!");
                }
            }
        }
        else if (resp == "N") {
            console.log("Seu animal é um Bípede? [S/N]: ");
        }
    }
})
