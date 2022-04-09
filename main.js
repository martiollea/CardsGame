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
  for (var i = 0; i < players.length; i++) {
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

let deck = initCards(rawCartas);
let players = initPlayers(rawPlayers);

shuffle(deck);
repartir(deck, players);
let winner = calculaGanador(players);

console.log(winner);

function shuffle(cards) {
  for (var i = 0; i < cards.length; i++) {
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

function calculaGanador(players) {
  let winner = [];

  for (var i = 0; i < players.length; i++) {
    let result = 0;
    let mainResult = 0;
    for (var j = 0; j < players[i]["cards"].length; j++) {
      result += players[i]["cards"][j]["value"];
    }
    console.log(result);
    if (result > mainResult && result <= 21) {
      mainResult = result;
      winner = [];
      winner = players[i]["firstname"];
      console.log(winner);
    } else if (result === mainResult) {
      winner.push(players[i]["firstname"]);
    } else console.log("fail");
  }
  return winner;
}

function calculaAValue1(card) {
  card["value"] = 1;
}
function calculaAValue11(card) {
  card["value"] = 11;
}
