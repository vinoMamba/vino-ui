import { defineComponent } from "vue";
import "./style/collapse.css"

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
    return () => (
      <div class="v-collapse-item">
        <div class="v-collapse-item-title">{props.title}</div>
        <div class="v-collapse-item-content">
          {slots.default && slots.default()}
        </div>
      </div>
    );
  },
});

export default CollapseItem;
