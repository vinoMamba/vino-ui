import { defineComponent, PropType, ref, computed } from "vue";
import { SourceItem } from "./types";
import "./style/cascader.css";

const cascaderItemProps = {
  sourceList: {
    type: Array as PropType<SourceItem[]>,
  },
};

const CascaderItem = defineComponent({
  name: "CascaderItem",
  props: cascaderItemProps,
  setup(props) {
    const leftSelected = ref<SourceItem>();
    const rightItem = computed(() => {
      if (leftSelected.value && leftSelected.value.children) {
        return leftSelected.value.children;
      } else {
        return null;
      }
    });
    return () => (
      <div class="v-cascader-item">
        <div class="left">
          {props.sourceList?.map((item) => (
            <div onClick={() => (leftSelected.value = item)}>{item.name}</div>
          ))}
        </div>
        <div class="right">
          {rightItem.value ? (
            <CascaderItem sourceList={rightItem.value}></CascaderItem>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  },
});

export default CascaderItem;
