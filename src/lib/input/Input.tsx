import { defineComponent } from "vue";
import "./style/input.css";
import { VIcon } from "..";

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
  components: { VIcon },
  props: inputProps,
  emits: ["change"],
  setup(props, { emit }) {
    return () => (
      <div class={{ "v-input": true, error: props.error }}>
        <input
          type="text"
          disabled={props.disabled}
          readonly={props.readonly}
          value={props.value}
          onChange={(e) => emit("change", (e.target as HTMLInputElement).value)}
        />
        {props.error ? (
          <div class="v-input-error">
            <v-icon name="error" class="fill-current text-red-500" />
            <span class="text-red-500 px-2">{props.error}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  },
});

export default Input;
