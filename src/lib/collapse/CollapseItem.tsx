import { defineComponent, ref } from "vue";
import "./style/collapse.css";

const collapseItemProps = {
  title: {
    type: String,
    required: true,
  },
} as const;

const CollapseItem = defineComponent({
  name: "CollapseItem",
  props: collapseItemProps,
  setup(props, { slots }) {
    const contentVisible = ref(false);
    const toggleContent = () => {
      contentVisible.value = !contentVisible.value;
    };
    return () => (
      <div class="v-collapse-item">
        <div class="v-collapse-item-title" onClick={toggleContent}>
          {props.title}
        </div>
        {contentVisible.value && (
          <div class="v-collapse-item-content">
            {slots.default && slots.default()}
          </div>
        )}
      </div>
    );
  },
});

export default CollapseItem;
