const prompt = require("prompt-sync")()

console.log("Bienvenue dans mon jeu, je vais vous faire visiter Marseille ! vous etes a l'entrée de la ville.");
let choice = prompt('vous voulez aller a droite (d) ou a gauche (g)')

while (choice != "d" && choice != "g") {
    console.log("tu tes trompé")
    choice = prompt('tu veux aller a droite (d) ou a gauche (g)')
}
if (choice == "d") { //chemin droit 
    console.log("Tu est allée à droite tu tombe sur karadoc qui fait de la moto");
    choice = prompt("T'en fais avec lui (m) ou tu le regarde (r)")
    while (choice != "m" && choice != "r") {
        console.log("tu t'es tromper, ");
        choice = prompt("T'en fais avec lui (m) ou tu le regarde (r)")
    }
    if (choice == "m") { //chemin 1=FIN
        console.log("tu fais de la moto avec karadoc, mais vous frapper en bavette sur la A7 ! vous mourrez tous les 2 ! FIN");
    }
    else if (choice == "r") { //chemin 1
        console.log("tu le regarde cabrer, mais il penche un peu trop,");
        choice = prompt("Tu le laisse tomber (t) ou tu crie pour pas qu'il tombe (c) ")

        while (choice != "t" && choice != "c") {
            console.log("tu t'es trompé");
            choice = prompt("Tu le laisse tomber (t) ou tu crie pour pas qu'il tombe (c) ")
        }
        if (choice == "t") { //chemin 1 1 = FIN
            console.log("il se ramasse sur le sol est agonise jusqu'a sa mort ! FIN");
        }
        else if (choice == "c") { //chemin 1 2
            console.log("tu crie pour pas qu'il tombe");
            choice = prompt("Karadoc est sauvé de justesse, il a eu un coup de chaud ! Karadoc veux que vous allez au prado dragué des miss (d) ou a la plage se raffréchir (p) ")
        }
        while (choice != "d" && choice != "p") {
            console.log("tu t'es trompé");
            choice = prompt("Karadoc est sauvé de justesse, il a eu un coup de chaud ! Karadoc veux que vous allez au prado dragué des miss (d) ou a la plage se raffréchir (p) ")
        }
        if (choice == "d") { //chemin 1 2 1 = FIN
            console.log("Vous et Karadoc aller au Prado dragué lorsque Madame Karadoc vous voies et vous prends en chasse elle sort une batte de baseball et vous tabasse à mort ! FIN ");
        }
        else if (choice == "p") { //chemin 1 2 2
            console.log("Vous allez à plage ! l'eau est chaude quand tout a coup un immense requin arrive à toute vitesse sur vous et vous mange ! vous etes mort ! FIN");
        }


    }
}
else if (choice == "g") { //chemin gauche
    console.log("Tu est aller a gauche tu arrive devant un immense chateau");
    choice = prompt("Tu entre dans le chateau (e) ou tu le regarde (r)")
}
while (choice != "e" && choice != "r") {
    console.log("tu t'es tromper, ");
    choice = prompt("Tu entre dans le chateau (e) ou tu le regarde (r)")
}
if (choice == "e") { //chemin 1 = FIN
    console.log("tu tombe sur un géant qui te prend en chasse et t'explose la tête ! FIN");
}
else if (choice == "r") { //chemin 12 = FIN
    console.log("tu regarde le chateau, lorsqu'une voie de princesse t'interpelle,");
    choice = prompt("Tu crie pour interpellé la princesse (c) ou tu entre discrètement et tu te dirige en direction de la voix (v) ")
    while (choice != "c" && choice != "v") {
        console.log("tu t'es tromper, ");
        choice = prompt("tu te fais tuer ! FIN")
    }
    if (choice == "c") {
        console.log("tu te fais tuer ! FIN");
    }
    else if (choice == ("v")) { // chemin 122 = FIN
        console.log("Tu meurs aussi, FIN");
    }
}
