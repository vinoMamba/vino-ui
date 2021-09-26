import {defineComponent} from "vue";
import "./style/buttonGroup.scss";

export default defineComponent({
    name: 'VButtonGroup',
    setup(props, {slots}) {
        return () => (
            <div class="v-button-group">
                {slots.default ? slots.default() : ''}
            </div>
        );
    }
});
