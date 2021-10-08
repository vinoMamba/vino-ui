import { defineComponent, PropType, ref, computed } from "vue";
import CascaderItem from "./CascaderItem";
import { SourceItem } from "./types";
import "./style/cascader.css";

const cascaderProps = {
  source: {
    type: Array as PropType<SourceItem[]>,
  },
  selected: {
    type: Array as PropType<SourceItem[]>,
  },
};

const Cascader = defineComponent({
  name: "Cascader",
  props: cascaderProps,
  setup(props, { emit }) {
    const popoverVisible = ref(false);
    const togglePopoverVisible = () => {
      popoverVisible.value = !popoverVisible.value;
    };
    const updateData = (newValue: SourceItem) => {
      emit("update:selected", newValue);
    };
    const result = computed(() => {
      return props.selected?.map((item) => item.name).join("/");
    });
    return () => (
      <div class="v-cascader">
        <div class="v-cascader-trigger" onClick={togglePopoverVisible}>
          {result.value}
        </div>
        {popoverVisible.value ? (
          <div class="v-cascader-popover">
            <CascaderItem
              sourceList={props.source}
              selected={props.selected}
              onUpdateSelected={updateData}
            ></CascaderItem>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  },
});

export default Cascader;
