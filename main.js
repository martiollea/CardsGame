import { deck, players } from "./readJson.js";
import { shuffle } from "./shuffle.js";
import { repartir } from "./repartir.js";
import * as extraFunctions from "./extraFunctions.js";
import { apostar } from "./apostar.js";
import { premiar } from "./premiar";
import { calculaGanador } from "./winner.js";

shuffle(deck);
repartir(deck, players);
let winner = calculaGanador(players);

/*
const playerList = document.getElementById("players");

const renderListItem = (player) => {
  const div = document.createElement("div");
  div.textContent = player.cards;

  li.append(div);
};

const render = () => {
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i]["cards"].length; j++) {
      playerList.appendChild(renderListItem(players[i]["cards"][j]));
    }
  }
};

render();
*/
