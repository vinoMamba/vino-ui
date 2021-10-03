import { defineComponent } from "vue";

import "./style/layout.css";
const Content = defineComponent({
  name: "Content",
  setup(props, { slots }) {
    return () => (
      <main class="v-content">{slots.default && slots.default()}</main>
    );
  },
});

export default Content;
