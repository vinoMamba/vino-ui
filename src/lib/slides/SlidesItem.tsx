import { defineComponent, ref } from "vue";

const SlidesItem = defineComponent({
  name: "SlidesItem",
  setup(props, { slots }) {
    const visible = ref(false);
    const item = ref(null);
    return () =>
      visible.value ? (
        <div class="v-slides-item" ref={item}>
          {slots.default ? slots.default() : null}
        </div>
      ) : null;
  },
});

export default SlidesItem;
