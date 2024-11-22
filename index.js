let nomeHeroi = "Carlinhos";
let xpHeroi = 10000;
const mensagemRanking = " está no nível: ";

for (cont = 1; cont <= xpHeroi; cont++) {
  console.log(nomeHeroi + " acumulou: " + cont + " de xp!");
}

if (xpHeroi <= 1000) {
  console.log("O herói de nome " + nomeHeroi + mensagemRanking + "Ferro");
} else if (xpHeroi > 1000 && xpHeroi <= 2000) {
  console.log("O herói de nome " + nomeHeroi + mensagemRanking + "Bronze");
} else if (xpHeroi > 2000 && xpHeroi <= 5000) {
  console.log("O herói de nome " + nomeHeroi + mensagemRanking + "Prata/Ouro");
} else if (xpHeroi > 5000 && xpHeroi <= 8000) {
  console.log(
    "O herói de nome " + nomeHeroi + mensagemRanking + "Platina/Diamante"
  );
} else if (xpHeroi > 8000 && xpHeroi <= 9000) {
  console.log("O herói de nome " + nomeHeroi + mensagemRanking + "Ascendente");
} else if (xpHeroi > 9000 && xpHeroi <= 10000) {
  console.log("O herói de nome " + nomeHeroi + mensagemRanking + "Imortal");
} else if (xpHeroi > 10000) {
  console.log("O herói de nome " + nomeHeroi + mensagemRanking + "Radiante");
}
