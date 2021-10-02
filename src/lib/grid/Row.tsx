import { defineComponent } from "vue";
import "./style/grid.css";

const Row = defineComponent({
  name: "Row",
  setup(props, { slots }) {
    return () => (
      <div class="v-row">{slots.default ? slots.default() : ""}</div>
    );
  },
});

export default Row;
