import { defineComponent } from "vue";

import "./style/layout.css";
const Footer = defineComponent({
  name: "Footer",
  setup(props, { slots }) {
    return () => (
      <footer class="v-footer">{slots.default && slots.default()}</footer>
    );
  },
});

export default Footer;
