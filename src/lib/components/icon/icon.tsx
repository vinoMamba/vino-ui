import {defineComponent} from "vue";
import "./style/icon.scss";

const Icon = defineComponent({
    name: 'Icon',
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
export default Icon;
