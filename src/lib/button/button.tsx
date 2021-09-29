import {defineComponent} from "vue";
import "./style/button.css";


const Button = defineComponent({
        name: "Button",
        setup(props, {slots}) {
            return () => (
                <button class="v-button">
                    <div class="content">
                        {slots.default ? slots.default() : "确定"}
                    </div>
                </button>
            );
        }
    }
);

export default Button;
