import {
    defineComponent,
    ref,
    inject,
    onMounted,
    onUpdated,
    Transition,
    computed,
} from "vue";
import {slidesInjectionKey} from "./Slides";
import "./style/slides.css";

const slidesItemProps = {
    name: {
        type: String,
        required: true,
    },
} as const;

const SlidesItem = defineComponent({
    name: "SlidesItem",
    components: {Transition},
    props: slidesItemProps,
    setup(props, {slots}) {
        const VSlides = inject(slidesInjectionKey);
        const visible = ref(false);
        const updateVisibleValue = () => {
            visible.value = props.name === VSlides?.selected.value;
        };

        const reverse = ref(VSlides?.reverse);
        onMounted(() => {
            updateVisibleValue();
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
                        {slots.default && slots.default()}
                    </div>
                ) : null}
            </transition>
        );
    },
});

export default SlidesItem;
