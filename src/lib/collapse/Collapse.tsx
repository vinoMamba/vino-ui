import { defineComponent, PropType, InjectionKey, provide } from "vue";
import "./style/collapse.css";

const collapseProps = {
  single: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Array as PropType<String[]>,
  },
} as const;

export interface CollapseInjection {
  updateSelected: (name: String) => void;
}
export const collapseInjectionKey: InjectionKey<CollapseInjection> =
  Symbol("collapse");

const Collapse = defineComponent({
  name: "Collapse",
  props: collapseProps,
  setup(props, { slots, emit }) {
    const updateSelected = (name: String) => {
      let copySelected = JSON.parse(JSON.stringify(props.selected));
      if (copySelected.includes(name)) {
        if (props.single) {
          copySelected = [];
        } else {
          const index = copySelected.indexOf(name);
          copySelected.splice(index, 1);
        }
      } else {
        if (props.single) {
          copySelected = [name];
        } else {
          copySelected.push(name);
        }
      }
      emit("update:selected", copySelected);
    };
    provide(collapseInjectionKey, {
      updateSelected,
    });
    return () => (
      <div class="v-collapse">{slots.default && slots.default()}</div>
    );
  },
});

export default Collapse;
