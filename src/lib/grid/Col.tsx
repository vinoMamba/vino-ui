import { defineComponent } from "vue";
import "./style/grid.css";

const colProps = {
  span: {
    type: [Number, String],
  },
};

const Col = defineComponent({
  name: "Col",
  props: colProps,
  setup(props, { slots }) {
    return () => (
      <div class={["v-col", `v-col-${props.span}`]}>
        {slots.default ? slots.default() : ""}
      </div>
    );
  },
});

export default Col;
