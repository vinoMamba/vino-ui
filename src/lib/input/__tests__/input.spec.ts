import { mount } from "@vue/test-utils";
import { VInput } from "../..";

describe("v-input", () => {
  it("存在", () => {
    mount(VInput);
  });

  it("可以设置 value", () => {
    const wrapper = mount(VInput, {
      props: {
        value: "vino",
      },
    });
    const inputElement = wrapper.vm.$el.querySelector("input");
    expect(inputElement.value).toEqual("vino");
  });
});
