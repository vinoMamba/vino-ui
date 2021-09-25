import {defineComponent, PropType} from "vue";
import "./style/button.scss";

type  IconPosition = "left" | "right"

export default defineComponent({
        name: "VButton",
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
                        <svg class="icon">
                            <use xlinkHref={`#v-${props.icon}`}/>
                        </svg> : ""
                    }
                    <div class="content">
                        {slots.default ? slots.default() : "确定"}
                    </div>
                </button>
            );
        }
    }
);