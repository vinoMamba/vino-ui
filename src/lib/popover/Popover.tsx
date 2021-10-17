import {
  defineComponent,
  ref,
  nextTick,
  PropType,
  computed,
  onMounted,
  onUnmounted,
  watchEffect,
} from "vue";
import "./style/popover.css";

const popoverProps = {
  position: {
    type: String as PropType<"top" | "left" | "bottom" | "right">,
    default: "top",
  },
  trigger: {
    type: String as PropType<"click" | "hover">,
    default: "click",
  },
  visible: {
    type: Boolean,
    default: false,
  },
};

const Popover = defineComponent({
  name: "Popover",
  props: popoverProps,
  setup(props, { slots }) {
    watchEffect(() => {
      console.log(props.visible);
    });
    const contentWrapper = ref<HTMLElement | null>(null);
    const triggerWrapper = ref<HTMLElement | null>(null);
    const popoverWrapper = ref<HTMLElement | null>(null);
    const visible = ref(false);
    const positionContent = () => {
      document.body.appendChild(contentWrapper.value as HTMLElement);
      const { width, height, left, top } = (
        triggerWrapper.value as HTMLElement
      ).getBoundingClientRect();
      const { height: height2 } = (
        contentWrapper.value as HTMLElement
      ).getBoundingClientRect();
      const positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },

        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },

        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX,
        },

        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + width + window.scrollX,
        },
      };
      contentWrapper.value!.style.left = positions[props.position].left + "px";
      contentWrapper.value!.style.top = positions[props.position].top + "px";
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
    onMounted(() => {
      if (props.trigger === "click") {
        popoverWrapper.value?.addEventListener("click", onclick);
      } else if (props.trigger === "hover") {
        popoverWrapper.value?.addEventListener("mouseenter", open);
        popoverWrapper.value?.addEventListener("mouseleave", close);
      }
    });
    onUnmounted(() => {
      if (props.trigger === "click") {
        popoverWrapper.value?.removeEventListener("click", onclick);
      } else if (props.trigger === "hover") {
        popoverWrapper.value?.removeEventListener("mouseenter", open);
        popoverWrapper.value?.removeEventListener("mouseleave", close);
      }
    });
    return () => (
      <div class="v-popover" ref={popoverWrapper}>
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
