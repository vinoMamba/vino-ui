import {
  defineComponent,
  InjectionKey,
  provide,
  computed,
  ComputedRef,
  ref,
  onMounted,
} from "vue";
import "./style/slides.css";

export interface Slidesjection {
  selected: ComputedRef<String>;
  getItemName: (name: String) => void;
}

export const slidesjectionKey: InjectionKey<Slidesjection> = Symbol("slides");

const slidesProps = {
  selected: {
    type: String,
    required: true,
  },
  autoPaly: {
    type: Boolean,
    default: true,
  },
} as const;

const Slides = defineComponent({
  name: "Slides",
  props: slidesProps,
  setup(props, { slots, emit }) {
    const names = ref<String[]>([]);
    const getItemName = (name: String) => {
      names.value.push(name);
    };
    const getSelected = () => {
      if (names.value.includes(props.selected)) {
        return props.selected;
      } else {
        return names.value[0];
      }
    };
    const playAutomatically = () => {
      let index = names.value.indexOf(getSelected());
      const run = () => {
        if (index === names.value.length) {
          index = 0;
        }
        emit("update:selected", names.value[index]);
        index++;
        setTimeout(run, 3000);
      };
      run();
    };
    const selectItem = (index: number) => {
      emit("update:selected", names.value[index]);
    };
    onMounted(() => {
      playAutomatically();
    });
    provide(slidesjectionKey, {
      selected: computed(() => props.selected),
      getItemName,
    });

    return () => (
      <div class="v-slides">
        <div class="v-slides-window">
          <div class="v-slides-wrapper">
            {slots.default ? slots.default() : null}
          </div>
        </div>
        <div>
          {names.value.map((item, index) => {
            return <span onClick={() => selectItem(index)}>{index}</span>;
          })}
        </div>
      </div>
    );
  },
});

export default Slides;
