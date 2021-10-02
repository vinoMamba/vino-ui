import { defineComponent } from "vue";
import "./style/grid.css";

const rowProps = {
  gutter: [Number, String],
};

const Row = defineComponent({
  name: "Row",
  props: rowProps,
  setup(props, { slots }) {
    return () => (
      <div class="v-row">{slots.default ? slots.default() : ""}</div>
    );
  },
});

export default Row;
