import {mount} from "@vue/test-utils";
import {VButton} from "../../index";

describe('v-button', () => {

    it('可以设置icon', () => {
        const wrapper = mount(VButton, {
            props: {
                icon: 'setting',
            }
        });
        const useElements = wrapper.vm.$el.querySelectorAll('use');
        expect(useElements[0].getAttribute('xlink:href')).toEqual('#v-setting');
    });

    it('可以设置loading', () => {
        const wrapper = mount(VButton, {
            props: {
                icon: 'setting',
                loading: true
            }
        });
        const useElements = wrapper.vm.$el.querySelectorAll('use');
        expect(useElements.length).toEqual(1);
        expect(useElements[0].getAttribute('xlink:href')).toEqual('#v-loading');
    });

    it('可以设置iconPosition', () => {
        const wrapper = mount(VButton, {
            props: {
                icon: 'setting',
                iconPosition: 'right'
            }
        });
        expect(wrapper.find('button').classes('icon-right')).toBe(true);
    });

});

