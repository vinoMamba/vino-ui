import { defineComponent, ref, onUnmounted, onMounted, nextTick } from "vue";
import "./style/popover.css";
import { clickOutsideDiretive, removeListener } from "../utils/clickOutside";
const Popover = defineComponent({
  name: "Popover",
  directives: { clickOutside: clickOutsideDiretive },

  setup(props, { slots }) {
    const contentWrapper = ref<HTMLElement | null>(null);
    const triggerWrapper = ref<HTMLElement | null>(null);
    const visible = ref(false);

    const toggleVisible = (e: Event) => {
      e.stopPropagation();
      visible.value = !visible.value;
      if (visible.value) {
        nextTick(() => {
          const { top, left, width, height } = (
            triggerWrapper.value as HTMLElement
          ).getBoundingClientRect();
          console.log(top, left, height, width);
          contentWrapper.value!.style.left = left + window.scrollX + "px";
          contentWrapper.value!.style.top = height + window.scrollY + "px";
          document.body.appendChild(contentWrapper.value as HTMLElement);
        });
      }
    };

    const closePopoverContent = () => {
      visible.value = false;
    };
    onMounted(() => {});
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
            ref={contentWrapper}
            class="v-popover-content-wrapper"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span ref={triggerWrapper}>{slots.content && slots.content()}</span>
          </div>
        )}
        {slots.default && slots.default()}
      </div>
    );
  },
});

export default Popover;
