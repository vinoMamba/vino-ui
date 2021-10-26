import {
  defineComponent,
  ref,
  inject,
  onUpdated,
  onMounted,
  getCurrentInstance,
  Transition,
} from "vue";
import { collapseInjectionKey } from "./Collapse";
import "./style/collapse.css";
import { VIcon } from "..";

const collapseItemProps = {
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
} as const;

const CollapseItem = defineComponent({
  name: "CollapseItem",
  components: { VIcon, Transition },
  props: collapseItemProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const VCollapse = inject(collapseInjectionKey);
    const contentVisible = ref(false);
    const toggleContent = () => {
      VCollapse!.updateSelected(props.name);
    };
    onMounted(() => {
      const selected = instance?.parent?.props.selected as String[];
      if (selected.includes(props.name)) {
        contentVisible.value = true;
      } else {
        contentVisible.value = false;
      }
    });
    onUpdated(() => {
      const selected = instance?.parent?.props.selected as String[];
      if (selected.includes(props.name)) {
        contentVisible.value = true;
      } else {
        contentVisible.value = false;
      }
    });
    return () => (
      <div class="v-collapse-item">
        <div class="v-collapse-item-title" onClick={toggleContent}>
          <v-icon
            name="right"
            class={{
              "v-collapse-item-title-icon": true,
              "v-collapse-item-title-icon-selected": contentVisible.value,
            }}
          />
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
