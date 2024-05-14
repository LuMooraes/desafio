let nomeHeroi = "Falkito"
let xpHeroi = 10.001

switch (xpHeroi) {
    case 1.001 && 2.000:
      console.log("Você é bronze");
      break;
    case 2.001 && 5.000:
        console.log("Você é Prata");
        break;
    case 6.001 && 7.000:
        console.log("Você é Ouro");
        break;
    case 7.001 && 8.000:
        console.log("Você é Platina");
        break;
    case 8.001 && 9.000:
        console.log("Você é Ascendete");
        break;
    case 9.001 && 10.000:
        console.log("Você é Imortal");
        break;
    case 10.001:
        console.log("Você é Radiante")
        break;  
}
console.log("O heroí de nome " + nomeHeroi + " está no nivel de " +xpHeroi + " ele é Radiante")