import { defineComponent, onMounted, getCurrentInstance } from "vue";

const Slides = defineComponent({
  name: "Slides",
  setup(props, { slots }) {
    onMounted(() => {});
    return () => (
      <div class="v-slides">
        <div class="v-slides-window">
          {slots.default ? slots.default() : null}
        </div>
      </div>
    );
  },
});

export default Slides;
