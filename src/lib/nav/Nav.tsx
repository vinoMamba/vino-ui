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
        const copy = JSON.parse(JSON.stringify(props.selected));
        const index = copy.indexOf(name);
        props.selected.includes(name) ? copy.splice(index, 1) : copy.push(name);
        emit("update:selected", copy);
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
