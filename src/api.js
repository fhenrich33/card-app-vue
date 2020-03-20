import axios from "axios";

const api = axios.create({
  baseURL: "https://deckofcardsapi.com/api/deck",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  newDeck: () => api.get(`/new/draw/?count=52`), //drawing all cards on the api so I can add then to the pile

  addToPile: (deckId, cards) =>
    api.get(`/${deckId}/pile/my_little_pile/add/?cards=${cards}`),

  getFromPile: deckId => api.get(`/${deckId}/pile/my_little_pile/list/`)
};
