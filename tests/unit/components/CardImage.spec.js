import { shallowMount } from "@vue/test-utils";
import CardImage from "@/components/CardImage.vue";

let wrapper;

describe("CardImage", () => {
  beforeEach(() => {
    wrapper = shallowMount(CardImage, {
      propsData: {
        card: "2H"
      }
    });
  });

  it("renders without errors", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders the correct rank and suit symbol", () => {
    expect(wrapper.find(".top").text()).toMatch("2 ♥︎");
  });

  it("contains class .red if it's a red suit (heart or diamond)", () => {
    expect(wrapper.findAll(".red").length).toBe(2);
  });
});
