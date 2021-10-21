import { defineComponent } from "vue";
import "./style/collapse.css";
const Collapse = defineComponent({
  name: "Collapse",
  setup(props, { slots }) {
    return () => (
      <div class="v-collapse">{slots.default && slots.default()}</div>
    );
  },
});

export default Collapse;
