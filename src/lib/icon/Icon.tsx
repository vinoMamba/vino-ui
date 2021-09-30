import { defineComponent } from "vue";
import "./style/icon.css";

const iconProps = {
  name: {
    type: String,
  },
};

const Icon = defineComponent({
  name: "Icon",
  props: iconProps,
  setup(props) {
    return () => (
      <svg class="v-icon">
        <use xlinkHref={`#v-${props.name}`} />
      </svg>
    );
  },
});

export default Icon;
