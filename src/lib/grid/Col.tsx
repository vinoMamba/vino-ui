import { defineComponent, computed } from "vue";
import "./style/grid.css";

const colProps = {
  span: [Number, String],
  offset: [Number, String],
};

const Col = defineComponent({
  name: "Col",
  props: colProps,
  setup(props, { slots }) {
    const classes = computed(() => {
      return [
        "v-col",
        props.span && `v-col-${props.span}`,
        props.offset && `v-col-${props.offset}`,
      ];
    });
    return () => (
      <div class={classes.value}>{slots.default ? slots.default() : ""}</div>
    );
  },
});

export default Col;
