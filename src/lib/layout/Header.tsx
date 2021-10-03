import { defineComponent } from "vue";
import "./style/layout.css";

const Header = defineComponent({
  name: "Header",
  setup(props, { slots }) {
    return () => (
      <header class="v-header">{slots.default && slots.default()}</header>
    );
  },
});

export default Header;
