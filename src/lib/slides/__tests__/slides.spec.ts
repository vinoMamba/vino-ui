import {mount} from "@vue/test-utils";
import {VSlides} from "../../index";

describe("v-slides", () => {
    it("存在", () => {
        mount(VSlides, {
            props: {
                selected: ""
            }
        });
    });
    it('接受 v-slides-item,默认展示第一个', (done) => {
        const wrapper = mount(VSlides, {
            props: {
                selected: "one",
                autoPlay: false
            },
            slots: {
                default: `
               <v-slides-item name="one">
                 <div class="box1">1</div>
               </v-slides-item>
               <v-slides-item name="two">
                 <div class="box2">2</div>
               </v-slides-item>
               <v-slides-item name="three">
                 <div class="box3">3</div>
               </v-slides-item>
            `
            }
        });
        expect(wrapper.html()).toContain('<div class="box1">1</div>');
        done();
    });
});
