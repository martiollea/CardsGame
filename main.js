import { deck, players } from "./readJson.js";
import shuffle from ".shuffle.js";
import repartir from "repartir.js";
import * as extraFunctions from "./extraFunctions.js";
import calculaGanador from "./winner.js";

shuffle(deck);
repartir(deck, players);
let winner = calculaGanador(players);
