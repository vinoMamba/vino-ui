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
import {VIcon} from "..";

export interface SlidesInjection {
    selected: ComputedRef<string>;
    reverse: ComputedRef<boolean>;
}

export const slidesInjectionKey: InjectionKey<SlidesInjection> = Symbol("slides");

const slidesProps = {
    selected: {
        type: String,
        required: true,
    },
    autoPlay: {
        type: Boolean,
        default: true,
    },
} as const;

const Slides = defineComponent({
    name: "Slides",
    props: slidesProps,
    components: {VIcon},
    setup(props, {slots, emit}) {
        const names = ref<string[]>([]);
        const getSelected = () => {
            if (names.value.includes(props.selected)) {
                return props.selected;
            } else {
                return names.value[0];
            }
        };
        const selectedIndex = computed(() => {
            const index = names.value && names.value.indexOf(props.selected);
            return index === -1 ? 0 : index;
        });

        const timerId = ref<number | undefined>(undefined);
        const playAutomatically = () => {
            let index = names.value && names.value.indexOf(getSelected());
            const run = () => {
                if (index === (names.value && names.value.length)) {
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
            if (index === (names.value && names.value.length)) {
                index = 0;
            }
            if (index === -1) {
                index = names.value.length - 1;
            }
            updateLastSelectedIndex();
            reverse.value = lastSelectedIndex.value < index;
            emit("update:selected", (names.value && names.value[index]));
        };
        onMounted(() => {
            const children = slots.default && slots.default();
            names.value = children?.map((item) => item.props?.name) as string[];
            updateLastSelectedIndex();
            if (props.autoPlay) {
                playAutomatically();
            }
        });
        provide(slidesInjectionKey, {
            selected: computed(() => props.selected),
            reverse: computed(() => reverse.value),
        });
        const onMouseenter = () => {
            pause();
        };
        const onMouseleave = () => {
            playAutomatically();
        };
        const startTouch = ref<Touch | undefined>();
        const onTouchstart = (e: TouchEvent) => {
            pause();
            startTouch.value = e.touches[0];
        };
        const ontouchend = (e: TouchEvent) => {
            const {clientX: x1, clientY: y1} = startTouch.value as Touch;
            const {clientX: x2, clientY: y2} = e.changedTouches[0];
            const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y1 - y2, 2));
            const deltaY = Math.abs(y1 - y2);
            const rate = distance / deltaY;
            if (rate > 2) {
                if (x2 > x1) {
                    selectItem(selectedIndex.value + 1);
                } else {
                    selectItem(selectedIndex.value - 1);
                }
            }
        };

        const onClickPrev = () => {
            selectItem(selectedIndex.value - 1);
        };
        const onClickNext = () => {
            selectItem(selectedIndex.value + 1);
        };
        return () => (
            <div
                class="v-slides"
                onMouseenter={onMouseenter}
                onMouseleave={onMouseleave}
                onTouchstart={onTouchstart}
                onTouchend={ontouchend}
            >
                <div class="v-slides-window">
                    <div class="v-slides-wrapper">
                        {slots.default && slots.default()}
                    </div>
                </div>
                <div class="v-slides-dots">
          <span onClick={onClickPrev}>
            <v-icon name="left"/>
          </span>
                    {names.value && names.value.map((item, index) => {
                        return (
                            <span
                                onClick={() => selectItem(index)}
                                class={{active: index === selectedIndex.value}}
                            >
                {index + 1}
              </span>
                        );
                    })}
                    <span onClick={onClickNext}>
            <v-icon name="right"/>
          </span>
                </div>
            </div>
        );
    },
});

export default Slides;
