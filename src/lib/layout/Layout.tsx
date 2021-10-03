import { defineComponent, onMounted, ref, computed } from "vue";
import "./style/layout.css";
import Sider from "./Sider";

const Layout = defineComponent({
  name: "Layout",
  setup(props, { slots }) {
    const hasSider = ref(false);
    onMounted(() => {
      const VNodeList = slots.default ? slots.default() : [];
      VNodeList.forEach((item) => {
        if (item.type === Sider) {
          hasSider.value = true;
        }
      });
    });
    const classes = computed(() => {
      return { "v-layout": true, "v-has-sider": hasSider.value };
    });
    return () => (
      <div class={classes.value}>{slots.default && slots.default()}</div>
    );
  },
});
export default Layout;
