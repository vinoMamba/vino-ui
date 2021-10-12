import {
  defineComponent,
  ref,
  inject,
  onMounted,
  onUpdated,
  Transition,
} from "vue";
import { slidesjectionKey } from "./Slides";
import "./style/slides.css";

const slidesItemPorps = {
  name: {
    type: String,
    required: true,
  },
} as const;

const SlidesItem = defineComponent({
  name: "SlidesItem",
  components: { Transition },
  props: slidesItemPorps,
  setup(props, { slots }) {
    const visible = ref(false);
    const updateVisibleValue = () => {
      visible.value = props.name === VSlides?.selected.value;
    };
    const VSlides = inject(slidesjectionKey);
    onMounted(() => {
      updateVisibleValue();
      VSlides!.getItemName(props.name);
    });
    onUpdated(() => {
      updateVisibleValue();
    });
    return () => (
      <transition name="slide">
        {visible.value ? (
          <div class="v-slides-item">
            {slots.default ? slots.default() : null}
          </div>
        ) : null}
      </transition>
    );
  },
});

export default SlidesItem;
