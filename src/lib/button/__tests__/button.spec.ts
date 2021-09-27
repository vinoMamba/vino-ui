import {mount} from "@vue/test-utils";
import {VButton} from "../index";

it('should ', function () {
    const wrapper = mount(VButton, {
        props: {
            loading: true
        }
    });
    expect(wrapper.find('icon-loading')).toBe(true);
});
