export function shuffle(cards) {
  for (var i = 0; i < cards.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
}
