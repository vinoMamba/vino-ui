import { defineComponent, ref } from "vue";
import "./style/nav.css";

const SubNav = defineComponent({
  name: "SubNav",
  setup(props, { slots }) {
    const open = ref(false);
    const onClick = () => {
      open.value = !open.value;
    };
    return () => (
      <div class="v-sub-nav">
        <span onClick={onClick}>{slots.title && slots.title()}</span>
        {open.value ? (
          <div class="v-sub-nav-popover">
            {slots.default && slots.default()}
          </div>
        ) : null}
      </div>
    );
  },
});

export default SubNav;
