import { shallowMount } from "@vue/test-utils";
import AppHeader from "@/components/AppHeader.vue";

let wrapper;

describe("AppHeader", () => {
  beforeEach(() => {
    wrapper = shallowMount(AppHeader, {
      slots: {
        default: "Test Header"
      }
    });
  });

  it("renders without errors", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders correct header", () => {
    expect(wrapper.find("h1").text()).toBe("Test Header");
  });
});
