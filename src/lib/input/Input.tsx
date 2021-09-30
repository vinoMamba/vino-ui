import { defineComponent } from "vue";
import "./style/input.css";

const inputProps = {
  value: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
  },
};

const Input = defineComponent({
  name: "Input",
  props: inputProps,
  setup(props) {
    return () => (
      <div class={{ "v-input": true, error: props.error }}>
        <input
          type="text"
          disabled={props.disabled}
          readonly={props.readonly}
          value={props.value}
        />
        {props.error ? (
          <span class="text-red-500 px-2">{props.error}</span>
        ) : (
          ""
        )}
      </div>
    );
  },
});

export default Input;
