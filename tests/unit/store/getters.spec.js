import getters from "@/store/getters";
import { testDeck, fullHouseResults } from "../testCards";

const state = {
  deck: testDeck,
  pickedCards: ["2H", "2D", "2C", "2C", "3H", "3D", "3C"]
};

describe("Getters", () => {
  it("orders the user pile of cards based on the deck order", () => {
    expect(getters.sortedPile(state)).toStrictEqual([
      "2H",
      "3H",
      "2D",
      "3D",
      "2C",
      "2C",
      "3C"
    ]);
  });
  it("gets the highest card of the user's pile based on the deck order", () => {
    expect(
      getters.highestCard(null, { sortedPile: getters.sortedPile(state) })
    ).toBe("2H");
  });
  it("gets all possible full houses from user pile", () => {
    expect(getters.fullHouseCombo(state)).toStrictEqual(fullHouseResults);
  });
});
