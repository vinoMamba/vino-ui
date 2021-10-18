<template>
  <h1>Button</h1>
  <Demo :component="Button1Demo"></Demo>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import Button1Demo from "../demo-code/Button1Demo.vue";
import Demo from "./Demo.vue";

export default defineComponent({
  name: "ButtonDemo",
  components: {Demo},
  setup() {
    return {
      Button1Demo
    };
  }
});
</script>
