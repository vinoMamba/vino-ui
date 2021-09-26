import {defineComponent, PropType} from "vue";
import VIcon from "../icon/index";
import "./style/button.scss";

type  IconPosition = "left" | "right"

export default defineComponent({
        name: "VButton",
        components: {
            VIcon
        },
        props: {
            icon: {
                type: String,
            },
            iconPosition: {
                type: String as PropType<IconPosition>,
                default: "left",
            }
        },
        setup(props, {slots}) {
            return () => (
                <button class={{"v-button": true, [`icon-${props.iconPosition}`]: true}}>
                    {props.icon ?
                        <v-icon name={props.icon}/> : ''
                    }
                    <div class="content">
                        {slots.default ? slots.default() : "确定"}
                    </div>
                </button>
            );
        }
    }
);
