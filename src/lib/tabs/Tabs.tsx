import { defineComponent, onMounted } from "vue";
import Tab from "./Tab";

const Tabs = defineComponent({
  name: "Tabs",
  setup(props, { slots }) {
    const VNodeList = slots.default && slots.default();
    const titleList = VNodeList?.map((item) => item.props?.title);
    onMounted(() => {
      VNodeList?.forEach((item) => {
        if (item.type !== Tab) {
          throw new Error("Tabs 的子组件必须是 Tab !");
        }
      });
    });
    return () => (
      <>
        {titleList?.map((item) => (
          <div key={item}>{item}</div>
        ))}
        <div class="v-tabs">{slots.default ? slots.default() : ""}</div>
      </>
    );
  },
});

export default Tabs;
