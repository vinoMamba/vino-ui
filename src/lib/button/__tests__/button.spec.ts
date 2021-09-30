import { mount } from "@vue/test-utils";
import { VButton } from "../..";

describe("v-button", () => {
  it("可以设置theme为link", () => {
    const wrapper = mount(VButton, {
      props: {
        theme: "link",
      },
    });
    expect(wrapper.find("button").classes("v-theme-link")).toBe(true);
  });

  it("可以设置theme为text", () => {
    const wrapper = mount(VButton, {
      props: {
        theme: "text",
      },
    });
    expect(wrapper.find("button").classes("v-theme-text")).toBe(true);
  });

  it("theme默认属性为button", () => {
    const wrapper = mount(VButton, {
      props: {},
    });
    expect(wrapper.find("button").classes("v-theme-button")).toBe(true);
  });

  it("可以点击", async () => {
    const onClick = jest.fn();
    const wrapper = mount(VButton, {
      props: {
        onClick,
      },
    });
    await wrapper.trigger("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("可是设置disabled属性，且按钮不可点击", async () => {
    const onClick = jest.fn();
    const wrapper = mount(VButton, {
      props: {
        onClick,
        disabled: true,
      },
    });
    await wrapper.trigger("click");
    expect(onClick).not.toHaveBeenCalled();
  });
});
