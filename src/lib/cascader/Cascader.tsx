import { defineComponent, PropType, ref, computed, onUnmounted } from "vue";
import CascaderItem from "./CascaderItem";
import { SourceItem } from "./types";
import "./style/cascader.css";
import { clickOutsideDiretive, removeListener } from "./utils/clickOutside";

const cascaderProps = {
  source: {
    type: Array as PropType<SourceItem[]>,
  },
  selected: {
    type: Array as PropType<SourceItem[]>,
  },
  loadData: {
    type: Function,
  },
};

const Cascader = defineComponent({
  name: "Cascader",
  props: cascaderProps,
  directives: { clickOutside: clickOutsideDiretive },
  setup(props, { emit }) {
    const popoverVisible = ref(false);

    const open = () => {
      popoverVisible.value = true;
    };

    const close = () => {
      popoverVisible.value = false;
    };
    const toggle = () => {
      popoverVisible.value ? close() : open();
    };
    const updateData = (newValue: SourceItem[]) => {
      emit("update:selected", newValue);
      const lastItem = newValue[newValue.length - 1];
      const updateSource = (result: SourceItem[]) => {
        lastItem.children = result;
      };
      props.loadData && props.loadData(lastItem, updateSource);
    };

    const result = computed(() => {
      return props.selected?.map((item) => item.name).join("/");
    });
    onUnmounted(() => {
      removeListener();
    });
    return () => (
      <div class="v-cascader" vClickOutside={close}>
        <div class="v-cascader-trigger" onClick={toggle}>
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
