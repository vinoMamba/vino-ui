<template>
  <h1>Popover 弹出信息</h1>
  <Demo
    title="基本使用，支持 click 弹出和 hover 弹出"
    :component="Popover1Demo"
  />
  <Demo
    title="可以设置Position，分别是 top、bottom、left、right"
    :component="Popover2Demo"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Popover1Demo from "../demo-code/Popover1Demo.vue";
import Popover2Demo from "../demo-code/Popover2Demo.vue";
import Demo from "./Demo.vue";
export default defineComponent({
  name: "InputDemo",
  components: { Demo },
  setup() {
    return {
      Popover1Demo,
      Popover2Demo,
    };
  },
});
</script>
