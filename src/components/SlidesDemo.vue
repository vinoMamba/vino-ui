<template>
  <h1>Slides 组件</h1>
  <Demo
    title="基本使用，无缝轮播，只是手动、自动播放；支持手机端滑动"
    :component="Slides1Demo"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Slides1Demo from "../demo-code/Slides1Demo.vue";
import Demo from "./Demo.vue";
export default defineComponent({
  name: "InputDemo",
  components: { Demo },
  setup() {
    return {
      Slides1Demo,
    };
  },
});
</script>
