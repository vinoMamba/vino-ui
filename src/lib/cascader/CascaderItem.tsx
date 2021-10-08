import { defineComponent, PropType, ref, computed } from "vue";
import { SourceItem } from "./types";
import "./style/cascader.css";

const cascaderItemProps = {
  sourceList: {
    type: Array as PropType<SourceItem[]>,
  },
  selected: {
    type: Array as PropType<SourceItem[]>,
    default: () => [],
  },
  level: {
    type: Number,
    default: 0,
  },
};

const CascaderItem = defineComponent({
  name: "CascaderItem",
  props: cascaderItemProps,
  setup(props, { emit }) {
    const rightItem = computed(() => {
      const currentSelected = props.selected[props.level];

      if (currentSelected && currentSelected.children) {
        return currentSelected.children;
      } else {
        return null;
      }
    });
    const onClickLabel = (item: SourceItem) => {
      const copySelected: SourceItem[] = JSON.parse(
        JSON.stringify(props.selected)
      );
      copySelected[props.level] = item;
      copySelected.splice(props.level + 1);
      emit("updateSelected", copySelected);
    };
    const updateData = (newValue: SourceItem) => {
      emit("updateSelected", newValue);
    };
    return () => (
      <div class="v-cascader-item">
        <div class="left">
          {props.sourceList?.map((item) => (
            <div onClick={() => onClickLabel(item)}>{item.name}</div>
          ))}
        </div>
        <div class="right">
          {rightItem.value ? (
            <CascaderItem
              sourceList={rightItem.value}
              level={props.level + 1}
              selected={props.selected}
              onUpdateSelected={updateData}
            ></CascaderItem>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  },
});

export default CascaderItem;
