import { getCardValue, sortPile, isFullHouse, combinations } from "@/helpers";
import { testDeck } from "./testCards";

describe("Helper functions", () => {
  it("executes sanity test", () => {
    expect(true).toBe(true);
  });

  it("checks if 2H (2 of Hearts) is the highest value in the test deck", () => {
    expect(getCardValue(testDeck, "2H")).toBe(51);
  });

  it("orders the pile of cards by value according with the test deck order", () => {
    expect(
      sortPile(testDeck, ["2H", "2D", "2C", "2C", "3H", "3D", "3C"])
    ).toStrictEqual(["3C", "2C", "2C", "3D", "2D", "3H", "2H"]);
  });

  it("checks if a given hand/pile of cards can be a full house", () => {
    expect(isFullHouse(["2H", "2D", "2C", "3H", "3D"])).toBe(true);
  });

  it("returns a list of unique combinations from given list", () => {
    expect(combinations([1, 2, 3, 4])).toStrictEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
      [4],
      [1, 4],
      [2, 4],
      [1, 2, 4],
      [3, 4],
      [1, 3, 4],
      [2, 3, 4],
      [1, 2, 3, 4]
    ]);
  });
});
