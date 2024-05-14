let nomeHeroi = "Falkito";
let xpHeroi = 12.000;

switch (true) {
    case (xpHeroi >= 1.000 && xpHeroi <= 2.000):
        console.log(nomeHeroi + " é Ferro");
        break;
    case (xpHeroi >= 2.001 && xpHeroi <= 5.000):
        console.log(nomeHeroi + " é Bronze");
        break;
    case (xpHeroi >= 5.001 && xpHeroi <= 7.000):
        console.log(nomeHeroi + " é Prata");
        break;
    case (xpHeroi >= 7.001 && xpHeroi <= 8.000):
        console.log(nomeHeroi + " é Ouro");
        break;
    case (xpHeroi >= 8.001 && xpHeroi <= 9.000):
        console.log(nomeHeroi + " é Platina");
        break;
    case (xpHeroi >= 9.001 && xpHeroi <= 10.000):
        console.log(nomeHeroi + " é Ascendente");
        break;
    case (xpHeroi >= 10.000 && xpHeroi <= 11.000):
        console.log(nomeHeroi + " é Imortal");
        break;
    case (xpHeroi = 11.001):
        console.log(nomeHeroi + " é Radiante");
        break;   
    default:
        console.log("Parabens, voce é um Deus") 
}
    console.log("O herói de nome " + nomeHeroi + " está no nivel de " + xpHeroi)
