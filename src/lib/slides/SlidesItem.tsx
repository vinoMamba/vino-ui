import {
  defineComponent,
  ref,
  inject,
  onMounted,
  onUpdated,
  Transition,
  computed,
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
    const VSlides = inject(slidesjectionKey);
    const visible = ref(false);
    const updateVisibleValue = () => {
      visible.value = props.name === VSlides?.selected.value;
    };

    const reverse = ref(true);

    onMounted(() => {
      updateVisibleValue();
      VSlides!.getItemName(props.name);
    });
    onUpdated(() => {
      updateVisibleValue();
    });
    const classes = computed(() => {
      return {
        "v-slides-item": true,
        reverse: reverse.value,
      };
    });
    return () => (
      <transition name="slide">
        {visible.value ? (
          <div class={classes.value}>
            {slots.default ? slots.default() : null}
          </div>
        ) : null}
      </transition>
    );
  },
});

export default SlidesItem;
