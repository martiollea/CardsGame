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
repartir(deck, players);

console.log(players[0]["cards"].length);

function shuffle(cards) {
  for (var i = cards.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
}

function repartir(deck, players) {
  for (var i = 0; i < players.length; i++) {
    players[i]["cards"].push(deck[0]);
    deck.shift();
    players[i]["cards"][0]["visible"] = true;
    players[i]["cards"].push(deck[0]);
    deck.shift();
  }
}

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
