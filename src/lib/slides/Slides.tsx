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
  reverse: ComputedRef<Boolean>;
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
    const selectedIndex = computed(() => names.value.indexOf(props.selected));
    const timerId = ref<number | undefined>(undefined);
    const playAutomatically = () => {
      let index = names.value.indexOf(getSelected());
      const run = () => {
        if (index === names.value.length) {
          index = 0;
        }
        selectItem(index);
        index++;
        timerId.value = setTimeout(run, 3000);
      };
      run();
    };
    const pause = () => {
      window.clearTimeout(timerId.value);
      timerId.value = undefined;
    };

    const lastSelectedIndex = ref(0);
    const updateLastSelectedIndex = () => {
      lastSelectedIndex.value = selectedIndex.value;
    };
    const reverse = ref(false);
    const selectItem = (index: number) => {
      updateLastSelectedIndex();
      reverse.value = lastSelectedIndex.value < index;
      emit("update:selected", names.value[index]);
    };
    onMounted(() => {
      updateLastSelectedIndex();
      playAutomatically();
    });
    provide(slidesjectionKey, {
      selected: computed(() => props.selected),
      getItemName,
      reverse: computed(() => reverse.value),
    });
    const onMouseenter = () => {
      pause();
    };
    const onMouseleave = () => {
      playAutomatically();
    };
    return () => (
      <div
        class="v-slides"
        onMouseenter={onMouseenter}
        onMouseleave={onMouseleave}
      >
        <div class="v-slides-window">
          <div class="v-slides-wrapper">
            {slots.default ? slots.default() : null}
          </div>
        </div>
        <div class="v-slides-dots">
          {names.value.map((item, index) => {
            return (
              <span
                onClick={() => selectItem(index)}
                class={{ active: index === selectedIndex.value }}
              >
                {index + 1}
              </span>
            );
          })}
        </div>
      </div>
    );
  },
});

export default Slides;
