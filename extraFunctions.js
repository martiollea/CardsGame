function cartaExtra(deck, player) {
  player["cards"].push(deck[0]);
  deck.shift();
}

function girarCarta(card) {
  card["visible"] = true;
}

function plantarse(player) {
  for (var i = 0; i < player["cards"].length; i++) {
    if (player["cards"][i]["visible"] === false) player["cards"].splice(i, 1);
  }
}

function calculaAValue1(card) {
  card["value"] = 1;
}
function calculaAValue11(card) {
  card["value"] = 11;
}

export { cartaExtra, girarCarta, plantarse, calculaAValue1, calculaAValue11 };
