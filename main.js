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
  for (var i = players.length - 1; i >= 0; i--) {
    let player = new Player(
      players[i]["firstname"],
      players[i]["cards"],
      players[i]["points"]
    );
    finalPlayers.push(player);
  }
  return finalPlayers;
}

function initCards(cartas) {
  let finalCards = [];
  for (var i = cartas.length - 1; i >= 0; i--) {
    let carta = new Card(
      cartas[i]["number"],
      cartas[i]["value"],
      cartas[i]["visible"]
    );
    finalCards.push(carta);
  }
  return finalCards;
}

let deck = initCards(rawCartas);
let players = initPlayers(rawPlayers);

shuffle(deck);

function shuffle(cards) {
  for (var i = cards.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
}
