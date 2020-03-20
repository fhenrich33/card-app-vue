import { sortPile, combinations, isFullHouse } from "../helpers";

export default {
  sortedPile: ({ deck, pickedCards }) => sortPile(deck, pickedCards).reverse(),

  highestCard: (state, { sortedPile }) => sortedPile[0],

  fullHouseCombo: ({ pickedCards }) =>
    combinations(pickedCards)
      .filter(arr => arr.length === 5)
      .filter(isFullHouse)
};
