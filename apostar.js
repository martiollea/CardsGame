export function apostar(player, apuesta) {
  player["apostar"] += apuesta;
}
export function premiar(players, winner) {
  for (var i = 0; i < players.length; i++) {
    if (players[i]["firstname"] === winner) {
      players[i]["points"] += players[i]["apostar"] * 2;
      players[i]["apostar"] = 0;
      players[i]["cards"] = [];
    } else {
      players[i]["apostar"] = 0;
      players[i]["cards"] = [];
    }
  }
}
