import {
  defineComponent,
  InjectionKey,
  provide,
  computed,
  ComputedRef,
} from "vue";
import "./style/slides.css"

export interface Slidesjection {
  selected: ComputedRef<String>;
}

export const slidesjectionKey: InjectionKey<Slidesjection> = Symbol("slides");

const slidesProps = {
  selected: {
    type: String,
    required: true,
  },
} as const;

const Slides = defineComponent({
  name: "Slides",
  props: slidesProps,
  setup(props, { slots }) {
    provide(slidesjectionKey, {
      selected: computed(() => props.selected),
    });
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
