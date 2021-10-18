<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{color: color}">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
export default defineComponent({
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.name}`);
    const svgClass = computed(() => {
      if (props.name) {
        return `svg-icon icon-${props.name}`;
      }
      return "svg-icon";
    });
    return {
      iconName,
      svgClass
    };
  }
});
</script>

<style lang='scss'>
.svg-icon {
  width: 1.8em;
  height: 1.8em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
