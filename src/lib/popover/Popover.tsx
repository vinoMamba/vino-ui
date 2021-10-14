import { defineComponent, ref, onMounted, nextTick } from "vue";
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
    const listenToDocument = () => {
      let eventHandle = (e: any) => {
        if (
          !contentWrapper.value?.contains(e.target) &&
          !triggerWrapper.value?.contains(e.target)
        ) {
          visible.value = false;
          document.removeEventListener("click", eventHandle);
        }
      };
      document.addEventListener("click", eventHandle);
    };

    const onShow = () => {
      nextTick(() => {
        positionContent();
        listenToDocument();
      });
    };

    const onclick = (e: any) => {
      if (triggerWrapper.value?.contains(e.target)) {
        visible.value = !visible.value;
        if (visible.value) {
          onShow();
        }
      }
    };
    onMounted(() => {});
    return () => (
      <div class="v-popover" onClick={onclick}>
        {visible.value && (
          <div ref={contentWrapper} class="v-popover-content-wrapper">
            <span>{slots.content && slots.content()}</span>
          </div>
        )}
        <span ref={triggerWrapper}>{slots.default && slots.default()}</span>
      </div>
    );
  },
});

export default Popover;
