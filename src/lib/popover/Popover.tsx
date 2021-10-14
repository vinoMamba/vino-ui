import { defineComponent, ref, nextTick, PropType, computed } from "vue";
import "./style/popover.css";

const popoverProps = {
  position: {
    type: String as PropType<"top" | "left" | "bottom" | "right">,
    default: "top",
  },
};

const Popover = defineComponent({
  name: "Popover",
  props: popoverProps,
  setup(props, { slots }) {
    const contentWrapper = ref<HTMLElement | null>(null);
    const triggerWrapper = ref<HTMLElement | null>(null);
    const visible = ref(false);

    const positionContent = () => {
      document.body.appendChild(contentWrapper.value as HTMLElement);
      const { width, height, left, top } = (
        triggerWrapper.value as HTMLElement
      ).getBoundingClientRect();
      if (props.position === "top") {
        contentWrapper.value!.style.left = left + window.scrollX + "px";
        contentWrapper.value!.style.top = top + window.scrollY + "px";
      } else if (props.position === "bottom") {
        contentWrapper.value!.style.left = left + window.scrollX + "px";
        contentWrapper.value!.style.top = top + height + window.scrollY + "px";
      } else if (props.position === "left") {
        const { height: height2 } = (
          contentWrapper.value as HTMLElement
        ).getBoundingClientRect();
        contentWrapper.value!.style.left = left + window.scrollX + "px";
        contentWrapper.value!.style.top =
          top + window.scrollY + (height - height2) / 2 + "px";
      } else if (props.position === "right") {
        const { height: height2 } = (
          contentWrapper.value as HTMLElement
        ).getBoundingClientRect();
        contentWrapper.value!.style.left = left + width + window.scrollX + "px";
        contentWrapper.value!.style.top =
          top + window.scrollY + (height - height2) / 2 + "px";
      }
    };

    const onclickDocument = (e: any) => {
      if (
        !contentWrapper.value?.contains(e.target) &&
        !triggerWrapper.value?.contains(e.target)
      ) {
        close();
      }
    };
    const close = () => {
      visible.value = false;
      document.removeEventListener("click", onclickDocument);
    };
    const open = () => {
      visible.value = true;
      nextTick(() => {
        positionContent();
        document.addEventListener("click", onclickDocument);
      });
    };

    const onclick = (e: any) => {
      if (triggerWrapper.value?.contains(e.target)) {
        visible.value ? close() : open();
      }
    };
    const classes = computed(() => {
      return {
        "v-popover-content-wrapper": true,
        [`v-popover-${props.position}`]: true,
      };
    });

    return () => (
      <div class="v-popover" onClick={onclick}>
        {visible.value && (
          <div ref={contentWrapper} class={classes.value}>
            <span>{slots.content && slots.content()}</span>
          </div>
        )}
        <span ref={triggerWrapper} class="inline-block">
          {slots.default && slots.default()}
        </span>
      </div>
    );
  },
});

export default Popover;
