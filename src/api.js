import axios from "axios";

const api = axios.create({
  baseURL: "https://deckofcardsapi.com/api/deck",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  newDeck: () => api.get(`/new/draw/?count=52`), //drawing all cards on the api so I can add then to the pile

  // for some ungodly reason baseURL does not get iterpolated as expected from this point forwards
  addCardsToPile: (deckId, cards) =>
    api.get(
      `${api.defaults.baseURL}/${deckId}/pile/user_cards/add/?cards=${cards}`
    ),

  addRotationCardToPile: (deckId, rotationCard) =>
    api.get(
      `${api.defaults.baseURL}/${deckId}/pile/rotation_card/add/?cards=${rotationCard}`
    ),

  getCardsFromPile: deckId =>
    api.get(`${api.defaults.baseURL}/${deckId}/pile/user_cards/list/`),

  getRotationCardFromPile: deckId =>
    api.get(`${api.defaults.baseURL}/${deckId}/pile/rotation_card/list/`)
};
