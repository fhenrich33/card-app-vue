import { shallowMount } from "@vue/test-utils";
import CardInput from "@/components/CardInput.vue";

let wrapper;

describe("CardInput", () => {
  beforeEach(() => {
    wrapper = shallowMount(CardInput, {
      propsData: {
        card: { card: "", error: false },
        number: 1,
        haslabel: true
      }
    });
  });

  it("renders without errors", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders label with card number if props exist", () => {
    expect(wrapper.find("label").text()).toMatch("Card 1");
  });

  it("sets class .error if input doesn't match valid card code", async () => {
    const input = wrapper.find("input[type='text']");
    input.setValue("ff");
    input.trigger("keyup");
    input.trigger("blur");
    wrapper.vm.$forceUpdate();
    await wrapper.vm.$nextTick();
    expect(wrapper.contains(".error")).toBe(true);
  });
});
