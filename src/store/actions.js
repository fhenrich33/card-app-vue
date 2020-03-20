import api from "../api";
import {
  PICK_ROTATION_CARD,
  SET_DECK_ID,
  REORDER_WITH_ROTATION_CARD,
  STACK_DECK
} from "./types";

export default {
  newDeck: async ({ commit }, rotationCard) => {
    const newDeck = await api.newDeck();

    commit(SET_DECK_ID, newDeck.data.deck_id);
    commit(PICK_ROTATION_CARD, rotationCard);
    commit(REORDER_WITH_ROTATION_CARD);
    commit(STACK_DECK);
  },

  addToPile: async ({ state }, cards) =>
    await api.addToPile(state.deckId, cards),

  getFromPile: async ({ state }) => await api.getFromPile(state.deckId)
};
