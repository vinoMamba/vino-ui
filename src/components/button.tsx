import {defineComponent} from "vue";

export default defineComponent({
    name: "VButton",
    setup() {
        return () => (
            <button class="button-demo">按钮</button>
        );
    }
});