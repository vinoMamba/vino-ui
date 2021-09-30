import { mount } from "@vue/test-utils";
import { VIcon } from "../..";

describe("v-icon", () => {
  it("可以设置icon", () => {
    const wrapper = mount(VIcon, {
      props: {
        name: "setting",
      },
    });
    const useElements = wrapper.vm.$el.querySelectorAll("use");
    expect(useElements.length).toEqual(1);
    expect(useElements[0].getAttribute("xlink:href")).toEqual("#v-setting");
  });
});
