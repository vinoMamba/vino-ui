import {mount} from "@vue/test-utils";
import {VButton} from "../../index";

describe("v-button", () => {

    it("可以设置loading", () => {
        const wrapper = mount(VButton, {
            props: {
                icon: "setting",
                loading: true
            }
        });
        const useElements = wrapper.vm.$el.querySelectorAll("use");
        expect(useElements.length).toEqual(1);
        expect(useElements[0].getAttribute("xlink:href")).toEqual("#v-loading");
    });
});

