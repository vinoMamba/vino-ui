import { defineComponent, onUpdated, InjectionKey, provide } from "vue";
import "./style/nav.css";

export interface NavInjection {
  getNameProps: (name: string) => boolean;
  addSelected: (name: string) => void;
}

export const navInjectionKey: InjectionKey<NavInjection> = Symbol("nav");

const navProps = {
  selected: {
    type: Array,
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: false,
  },
};

const Nav = defineComponent({
  name: "Nav",
  props: navProps,
  setup(props, { slots, emit }) {
    const getNameProps = (name: string) => {
      if (props.selected.includes(name)) {
        return true;
      } else {
        return false;
      }
    };
    const addSelected = (name: string) => {
      if (props.multiple) {
        if (!props.selected.includes(name)) {
          const copy = JSON.parse(JSON.stringify(props.selected));
          copy.push(name);
          emit("update:selected", copy);
        }
      } else {
        emit("update:selected", [name]);
      }
    };
    provide(navInjectionKey, {
      getNameProps,
      addSelected,
    });
    onUpdated(() => {});
    return () => <div class="v-nav">{slots.default && slots.default()}</div>;
  },
});

export default Nav;
