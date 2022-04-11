export function calculaGanador(players) {
  let winner = [];
  let mainResult = 0;

  for (var i = 0; i < players.length; i++) {
    let result = 0;
    for (var j = 0; j < players[i]["cards"].length; j++) {
      result += players[i]["cards"][j]["value"];
    }
    console.log(result);
    if (result > mainResult && result <= 21) {
      mainResult = result;
      winner = players[i]["firstname"];
    } else if (result === mainResult) {
      winner.push(players[i]["firstname"]);
    }
  }
  return winner;
}
