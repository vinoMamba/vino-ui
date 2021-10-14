import { defineComponent, ref, onUnmounted } from "vue";
import "./style/popover.css";
import { clickOutsideDiretive, removeListener } from "../utils/clickOutside";
const Popover = defineComponent({
  name: "Popover",
  directives: { clickOutside: clickOutsideDiretive },

  setup(props, { slots }) {
    const visible = ref(false);
    const toggleVisible = (e: Event) => {
      e.stopPropagation();
      visible.value = !visible.value;
    };
    const closePopoverContent = () => {
      visible.value = false;
    };
    onUnmounted(() => {
      removeListener();
    });
    return () => (
      <div
        class="v-popover"
        onClick={toggleVisible}
        vClickOutside={closePopoverContent}
      >
        {visible.value && (
          <div
            class="v-popover-content-wrapper"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {slots.content && slots.content()}
          </div>
        )}
        {slots.default && slots.default()}
      </div>
    );
  },
});

export default Popover;
