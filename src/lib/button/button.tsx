import { defineComponent, computed, PropType } from "vue";
import "./style/button.css";
import { VIcon } from "..";

const buttonProps = {
  theme: {
    type: String as PropType<"button" | "link" | "text">,
    default: "button",
  },
  size: {
    type: String as PropType<"normal" | "larger" | "small">,
    default: "normal",
  },
  level: {
    type: String as PropType<"normal" | "success" | "warning" | "error">,
    default: "normal",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  onClick: Function as PropType<(e: MouseEvent) => void>,
  disabled: {
    type: Boolean,
    default: false,
  },
};

const Button = defineComponent({
  name: "Button",
  components: { VIcon },
  props: buttonProps,
  setup(props, { slots }) {
    const classes = computed(() => {
      return {
        "v-button": true,
        [`v-theme-${props.theme}`]: true,
        [`v-size-${props.size}`]: true,
        [`v-level-${props.level}`]: true,
        [`v-button-disabled`]: props.disabled,
      };
    });

    return () => (
      <button
        class={classes.value}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.loading ? (
          <v-icon class="animate-spin mr-1" name="loading" />
        ) : (
          ""
        )}
        <span>{slots.default ? slots.default() : "确定"}</span>
      </button>
    );
  },
});

export default Button;
