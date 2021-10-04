import { defineComponent, PropType } from "vue";
import { SourceItem } from "./types";

const cascaderItemProps = {
  sourceItem: {
    type: Object as PropType<SourceItem>,
  },
};

const CascaderItem = defineComponent({
  name: "CascaderItem",
  props: cascaderItemProps,
  setup(props, { slots }) {
    return () => (
      <div class="v-cascader-item">
        <div>{props.sourceItem?.name}</div>
        {props.sourceItem!.children &&
          props.sourceItem!.children.map((item) => {
            return <CascaderItem sourceItem={item}></CascaderItem>;
          })}
      </div>
    );
  },
});

export default CascaderItem;
