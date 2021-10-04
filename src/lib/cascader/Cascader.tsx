import { defineComponent, PropType } from "vue";
import CascaderItem from "./CascaderItem";
import { SourceItem } from "./types";

const cascaderProps = {
  source: {
    type: Array as PropType<SourceItem[]>,
  },
};

const Cascader = defineComponent({
  name: "Cascader",
  props: cascaderProps,
  setup(props, { slots }) {
    return () => (
      <div class="v-cascader">
        <div class="v-cascader-trigger">{slots.default && slots.default()}</div>
        <div class="v-cascader-popover">
          {props.source?.map((item) => {
            return <CascaderItem sourceItem={item}></CascaderItem>;
          })}
        </div>
      </div>
    );
  },
});

export default Cascader;
