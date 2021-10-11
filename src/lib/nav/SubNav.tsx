import { defineComponent } from "vue";
import "./style/nav.css";

const SubNav = defineComponent({
  name: "SubNav",
  setup(props, { slots }) {
    console.log(slots);
    return () => (
      <div class="v-sub-nav">
        <span>{slots.title && slots.title()}</span>
        <div class="v-sub-nav-popover">{slots.default && slots.default()}</div>
      </div>
    );
  },
});

export default SubNav;
