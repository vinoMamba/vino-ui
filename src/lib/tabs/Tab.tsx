import { defineComponent } from "vue";

const Tab = defineComponent({
  name: "Tab",
  setup(props, { slots }) {
    return () => (
      <div class="v-tab">{slots.default ? slots.default() : ""}</div>
    );
  },
});

export default Tab;
