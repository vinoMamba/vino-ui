import {defineComponent} from "vue";
import "./style/icon.scss";

export default defineComponent({
    name: 'VIcon',
    props: {
        name: {
            type: String,
        },
    },
    setup(props) {
        return () => (
            <svg class="v-icon">
                <use xlinkHref={`#v-${props.name}`}/>
            </svg>
        );
    }
});
