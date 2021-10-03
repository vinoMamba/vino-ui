import { defineComponent } from "vue";
import "./style/layout.css";
const Sider = defineComponent({
  name: "Sider",
  setup(props, { slots }) {
    return () => <div class="v-sider">{slots.default && slots.default()}</div>;
  },
});

export default Sider;
