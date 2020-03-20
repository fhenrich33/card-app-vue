export const getCardValue = (deck, card) => deck.indexOf(card);

export const sortPile = (deck, pile) =>
  pile.sort((a, b) => getCardValue(deck, a) - getCardValue(deck, b));

export const isFullHouse = hand => {
  const pileOfRank = {};

  hand.forEach(card => {
    const [kind] = card.split("");

    pileOfRank[kind]
      ? pileOfRank[kind].push(card)
      : (pileOfRank[kind] = [card]);
  });

  const qtyEachRank = Object.keys(pileOfRank).map(
    kind => pileOfRank[kind].length
  );

  const isFullHousePossible =
    qtyEachRank.some(qty => qty >= 3) &&
    qtyEachRank.filter(qty => qty >= 2).length >= 2;

  return isFullHousePossible;
};

export const combinations = arr => {
  let combos = new Array(1 << arr.length);

  for (let i = 0; i < combos.length; i++) {
    combos[i] = arr.filter((e, j) => i & (1 << j));
  }

  return combos;
};
