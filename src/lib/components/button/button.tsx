import {defineComponent, PropType} from "vue";
import "./style/button.scss";
import {VIcon} from "../index";

type  IconPosition = "left" | "right"

const Button = defineComponent({
        name: "Button",
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
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        setup(props, {slots}) {
            return () => (
                <button class={{"v-button": true, [`icon-${props.iconPosition}`]: true}}>
                    {props.loading ?
                        <v-icon class="icon icon-loading" name="loading"/> :
                        props.icon ?
                            <v-icon class="icon" name={props.icon}/> : ''
                    }
                    <div class="content">
                        {slots.default ? slots.default() : "确定"}
                    </div>
                </button>
            );
        }
    }
);

export default Button;
