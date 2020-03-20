import mutations from "@/store/mutations";
import { reorderedDeck } from "../testCards";

const state = {
  deck: [],
  deckId: "",
  pickedCards: [],
  rotationCard: "",
  suits: ["S", "C", "D", "H"],
  ranks: ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"]
};

describe("Mutations", () => {
  it("sets deck id for the deckofcards api", () => {
    mutations.SET_DECK_ID(state, "qwerty123");
    expect(state.deckId).toBe("qwerty123");
  });
  it("sets rotation card", () => {
    mutations.PICK_ROTATION_CARD(state, "6C");
    expect(state.rotationCard).toBe("6C");
  });
  it("sets cards from user pile", () => {
    mutations.PICK_CARDS(state, ["2H", "2D", "2C", "2C", "3H", "3D", "3C"]);
    expect(state.pickedCards).toStrictEqual([
      "2H",
      "2D",
      "2C",
      "2C",
      "3H",
      "3D",
      "3C"
    ]);
  });
  it("reorder ranks and suits position based on the rotation card", () => {
    mutations.REORDER_WITH_ROTATION_CARD(state);
    const { suits, ranks } = state;
    expect({ suits, ranks }).toStrictEqual({
      suits: ["D", "H", "S", "C"],
      ranks: ["7", "8", "9", "10", "J", "Q", "K", "A", "2", "3", "4", "5", "6"]
    });
  });
  it("stacks deck order based on the rank and suits highest position in their respective arrays", () => {
    mutations.STACK_DECK(state);
    expect(state.deck).toStrictEqual(reorderedDeck);
  });
});
