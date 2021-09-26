import {defineComponent, PropType} from "vue";
import "./style/button.scss";
import {VIcon} from "../icon";

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
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        setup(props, {slots}) {
            return () => (
                <button class={{"v-button": true, [`icon-${props.iconPosition}`]: true}}>
                    {props.icon ?
                        <v-icon class="icon" name={props.icon}/> :
                        props.loading ?
                            <v-icon class="icon icon-loading" name="loading"/> : ''
                    }
                    <div class="content">
                        {slots.default ? slots.default() : "确定"}
                    </div>
                </button>
            );
        }
    }
);
