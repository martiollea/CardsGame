import fs from "fs";

class Card {
  constructor(number, value, visible = false) {
    this.number = number;
    this.value = value;
    this.visible = visible;
  }
}
class Player {
  constructor(firstname, cards, points) {
    this.firstname = firstname;
    this.cards = cards;
    this.points = points;
    this.apostar = apostar;
  }
}

// Leemos los datos del json

let raw = fs.readFileSync("players.json");
let rawPlayers = JSON.parse(raw);

let rawData = fs.readFileSync("deck.json");
let rawCartas = JSON.parse(rawData);

//Inicializamos cartas y jugadores

function initPlayers(players) {
  let finalPlayers = [];
  for (var i = 0; i < players.length; i++) {
    let player = new Player(
      players[i]["firstname"],
      players[i]["cards"],
      players[i]["points"],
      players[i]["apostar"]
    );
    finalPlayers.push(player);
  }
  return finalPlayers;
}

function initCards(cartas) {
  let finalCards = [];
  for (var i = 0; i < cartas.length; i++) {
    let carta = new Card(
      cartas[i]["number"],
      cartas[i]["value"],
      cartas[i]["visible"]
    );
    finalCards.push(carta);
  }
  return finalCards;
}

export let deck = initCards(rawCartas);
export let players = initPlayers(rawPlayers);
