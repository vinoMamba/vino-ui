import { defineComponent, ref, nextTick } from "vue";
import "./style/popover.css";
const Popover = defineComponent({
  name: "Popover",

  setup(props, { slots }) {
    const contentWrapper = ref<HTMLElement | null>(null);
    const triggerWrapper = ref<HTMLElement | null>(null);
    const visible = ref(false);

    const positionContent = () => {
      document.body.appendChild(contentWrapper.value as HTMLElement);
      const { left, top } = (
        triggerWrapper.value as HTMLElement
      ).getBoundingClientRect();
      contentWrapper.value!.style.left = left + window.scrollX + "px";
      contentWrapper.value!.style.top = top + window.scrollY + "px";
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
    return () => (
      <div class="v-popover" onClick={onclick}>
        {visible.value && (
          <div ref={contentWrapper} class="v-popover-content-wrapper">
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
