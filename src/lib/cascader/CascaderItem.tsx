import { defineComponent, PropType, ref, computed } from "vue";
import { SourceItem } from "./types";

const cascaderItemProps = {
  sourceList: {
    type: Array as PropType<SourceItem[]>,
  },
};

const CascaderItem = defineComponent({
  name: "CascaderItem",
  props: cascaderItemProps,
  setup(props, { slots }) {
    const leftSelected = ref<SourceItem>();
    const rightItems = computed(() => {
      return leftSelected.value && leftSelected.value.children
        ? leftSelected.value.children
        : null;
    });
    return () => (
      <div class="v-cascader-item">
        <div class="left">
          {props.sourceList?.map((item) => (
            <div onClick={() => (leftSelected.value = item)}>{item.name}</div>
          ))}
        </div>
        {rightItems ? (
          <div class="right">
            <CascaderItem sourceList={rightItems}></CascaderItem>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  },
});

export default CascaderItem;
