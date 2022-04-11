export function repartir(deck, players) {
  for (var i = 0; i < players.length; i++) {
    players[i]["cards"].push(deck[0]);
    deck.shift();
    players[i]["cards"][0]["visible"] = true;
    players[i]["cards"].push(deck[0]);
    deck.shift();
  }
}
