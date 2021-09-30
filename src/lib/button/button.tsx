import { defineComponent, computed } from "vue";
import "./style/button.css";
import { VIcon } from "..";

const buttonProps = {
  theme: {
    type: String,
    default: "button",
  },
  size: {
    type: String,
    default: "normal",
  },
  level: {
    type: String,
    default: "normal",
  },
  loading: {
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
      };
    });

    return () => (
      <button class={classes.value}>
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
