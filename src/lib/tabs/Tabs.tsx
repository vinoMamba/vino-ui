import { defineComponent, onMounted, computed } from "vue";
import Tab from "./Tab";

const tabsProps = {
  selected: {
    type: String,
  },
};

const Tabs = defineComponent({
  name: "Tabs",
  props: tabsProps,
  setup(props, { slots, emit }) {
    const VNodeList = slots.default && slots.default();
    const titleList = VNodeList?.map((item) => item.props?.title);
    const currentVNode = computed(() => {
      console.log("执行了");
      return VNodeList?.filter((item) => item.props?.title === props.selected);
    });
    onMounted(() => {
      VNodeList?.forEach((item) => {
        if (item.type !== Tab) {
          throw new Error("Tabs 的子组件必须是 Tab !");
        }
      });
    });
    const select = (t: string) => {
      emit("update:selected", t);
    };
    return () => (
      <>
        {titleList?.map((item) => (
          <div
            class={{ selected: props.selected === item }}
            key={item}
            onClick={() => select(item)}
          >
            {item}
          </div>
        ))}
        <div key={props.selected}>{currentVNode.value}</div>
      </>
    );
  },
});

export default Tabs;
