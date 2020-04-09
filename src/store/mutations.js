import {
  PICK_ROTATION_CARD,
  PICK_CARDS,
  REORDER_WITH_ROTATION_CARD,
  STACK_DECK
} from "./types";

export default {
  [PICK_ROTATION_CARD]: (state, rotationCard) =>
    (state.rotationCard = rotationCard),

  [PICK_CARDS]: (state, cards) => (state.pickedCards = cards),

  [REORDER_WITH_ROTATION_CARD]: state => {
    const { rotationCard, ranks, suits } = state;
    const [rank, suit] = rotationCard.split("");

    const reorder = (val, list) => [
      ...list.slice(list.indexOf(val) + 1),
      ...list.slice(0, list.indexOf(val) + 1)
    ];

    state.ranks = reorder(rank, ranks);
    state.suits = reorder(suit, suits);
  },

  [STACK_DECK]: state =>
    (state.deck = state.suits.map(s => state.ranks.map(r => r + s)).flat())
};
