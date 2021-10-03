import { defineComponent, onMounted } from "vue";
import Tab from "./Tab";

const Tabs = defineComponent({
  name: "Tabs",
  setup(props, { slots }) {
    onMounted(() => {
      const VNodeList = slots.default && slots.default();
      VNodeList?.forEach((item) => {
        if (item.type !== Tab) {
          throw new Error("Tabs 的子组件必须是 Tab !");
        }
      });
    });
    return () => (
      <div class="v-tabs">{slots.default ? slots.default() : ""}</div>
    );
  },
});

export default Tabs;
