import {
  defineComponent,
  inject,
  computed,
  onMounted,
  onUpdated,
  ref,
} from "vue";
import { navInjectionKey } from "./Nav";
import "./style/nav.css";
const navItemProp = {
  name: {
    type: String,
    required: true,
  },
} as const;

const NavItem = defineComponent({
  name: "NavItem",
  props: navItemProp,
  setup(props, { slots, emit }) {
    const selected = ref(false);
    const VNav = inject(navInjectionKey);
    onUpdated(() => {
      selected.value = VNav!.getNameProps(props.name);
    });
    onMounted(() => {
      selected.value = VNav!.getNameProps(props.name);
    });
    const classes = computed(() => {
      return {
        "v-nav-item": true,
        "v-nav-item-selected": selected.value,
      };
    });
    const clickItem = () => {
      VNav!.addSelected(props.name);
    };
    return () => (
      <div class={classes.value} onClick={clickItem} >
        {slots.default && slots.default()}
      </div>
    );
  },
});

export default NavItem;
