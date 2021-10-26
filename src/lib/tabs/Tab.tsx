import { defineComponent } from "vue";
import "./style/tabs.css";

const tabProps = {
  title: {
    type: String,
  },
};

const Tab = defineComponent({
  name: "Tab",
  props: tabProps,
  setup(props, { slots }) {
    return () => (
      <div class="v-tab">{slots.default ? slots.default() : ""}</div>
    );
  },
});

export default Tab;
