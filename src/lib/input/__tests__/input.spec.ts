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
    wrapper.unmount();
  });
  describe("props", () => {
    it("可以设置 disabled", () => {
      const wrapper = mount(VInput, {
        props: {
          disabled: true,
        },
      });
      const inputElement = wrapper.vm.$el.querySelector("input");
      expect(inputElement.disabled).toEqual(true);
      wrapper.unmount();
    });

    it("可以设置 readonly", () => {
      const wrapper = mount(VInput, {
        props: {
          readonly: true,
        },
      });
      const inputElement = wrapper.vm.$el.querySelector("input");
      expect(inputElement.readOnly).toEqual(true);
      wrapper.unmount();
    });

    it("可以设置 error", () => {
      const wrapper = mount(VInput, {
        props: {
          error: "error",
        },
      });
      const useElement = wrapper.vm.$el.querySelector("use");
      expect(useElement.getAttribute("xlink:href")).toEqual("#v-error");
      expect(wrapper.text()).toEqual("error");
      wrapper.unmount();
    });
  });
  describe("event", () => {
    it("支持change事件", async () => {
      const mock = jest.fn();
      const wrapper = mount(VInput);
      wrapper.vm.$emit("change", mock);
      expect(wrapper.emitted().change).toBeTruthy();
      await wrapper.vm.$nextTick();
    });

    it("支持 input 事件", async () => {
      const wrapper = mount(VInput);
      wrapper.vm.$emit("input", "vino");
      expect(wrapper.emitted().input).toEqual([["vino"]]);
      expect(wrapper.emitted().input).toBeTruthy();
      await wrapper.vm.$nextTick();
    });

    it("支持 focus 事件", async () => {
      const wrapper = mount(VInput);
      wrapper.vm.$emit("focus");
      expect(wrapper.emitted().focus).toBeTruthy();
      await wrapper.vm.$nextTick();
    });

    it("支持 blur 事件", async () => {
      const wrapper = mount(VInput);
      wrapper.vm.$emit("blur");
      expect(wrapper.emitted().blur).toBeTruthy();
      await wrapper.vm.$nextTick();
    });
  });
});
