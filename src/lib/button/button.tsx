import {defineComponent} from "vue";
import "./style/button.scss";

export default defineComponent({
    name: "VButton",
    setup() {
        return () => (
            <button class="v-button">按钮</button>
        );
    }
});