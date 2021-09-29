import {defineComponent} from "vue";
import "./style/input.css";

const inputProps = {
    value: {
        type: String
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    }
};

const Input = defineComponent({
    name: "Input",
    props: inputProps,
    setup(props) {
        return () => (
            <div class="v-input">
                <input type="text" disabled={props.disabled} readonly={props.readonly} value={props.value}/>
            </div>
        );
    }
});

export default Input;