import { defineComponent, PropType, ref } from "vue";
import CascaderItem from "./CascaderItem";
import { SourceItem } from "./types";
import "./style/cascader.css";

const cascaderProps = {
  source: {
    type: Array as PropType<SourceItem[]>,
  },
};

const Cascader = defineComponent({
  name: "Cascader",
  props: cascaderProps,
  setup(props) {
    const popoverVisible = ref(false);
    const togglePopoverVisible = () => {
      popoverVisible.value = !popoverVisible.value;
    };
    return () => (
      <div class="v-cascader">
        <div class="v-cascader-trigger" onClick={togglePopoverVisible} />
        {popoverVisible.value ? (
          <div class="v-cascader-popover">
            <CascaderItem sourceList={props.source}></CascaderItem>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  },
});

export default Cascader;
