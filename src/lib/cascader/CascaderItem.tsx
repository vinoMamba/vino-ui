import { defineComponent, PropType } from "vue";
import { SourceItem } from "./types";

const cascaderItemProps = {
  sourceList: {
    type: Array as PropType<SourceItem[]>,
  },
};

const CascaderItem = defineComponent({
  name: "CascaderItem",
  props: cascaderItemProps,
  setup(props) {
    return () => (
      <div class="v-cascader-item">
        <div class="left">
          {props.sourceList?.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      </div>
    );
  },
});

export default CascaderItem;
