import { defineComponent } from "vue";

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
