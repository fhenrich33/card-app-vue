import api from "../api";
import {
  PICK_ROTATION_CARD,
  PICK_CARDS,
  REORDER_WITH_ROTATION_CARD,
  STACK_DECK
} from "./types";

export default {
  newDeck: async (context, { cards, rotationCard }) => {
    const newDeck = await api.newDeck();
    const deckId = newDeck.data.deck_id;

    if (!cards.some(c => c === rotationCard)) {
      await api.addRotationCardToPile(deckId, rotationCard);
    } else {
      cards = [rotationCard, ...cards.filter(c => c !== rotationCard)];
    }

    await api.addCardsToPile(deckId, cards);

    return deckId;
  },

  getFromPile: async ({ commit }, deckId) => {
    const cardsRes = await api.getCardsFromPile(deckId);
    const rotationCardRes = await api.getRotationCardFromPile(deckId);

    const cards = cardsRes.data.piles.user_cards.cards.map(cards => cards.code);
    const rotationCard = rotationCardRes.data.piles.rotation_card
      ? rotationCardRes.data.piles.rotation_card.cards[0].code
      : cards[0];

    commit(PICK_CARDS, cards);
    commit(PICK_ROTATION_CARD, rotationCard);
    commit(REORDER_WITH_ROTATION_CARD);
    commit(STACK_DECK);
  }
};
