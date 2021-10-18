<template>
  <h1>Input 输入框</h1>
  <Demo title="Input 基本使用" :component="Input1Demo" />
  <Demo title="Input 可以设置 disabled 属性" :component="Input2Demo" />
  <Demo title="Input 可以设置 error 属性" :component="Input3Demo" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Input1Demo from "../demo-code/Input1Demo.vue";
import Input2Demo from "../demo-code/Input2Demo.vue";
import Input3Demo from "../demo-code/Input3Demo.vue";
import Demo from "./Demo.vue";
export default defineComponent({
  name: "InputDemo",
  components: { Demo },
  setup() {
    return {
      Input1Demo,
      Input2Demo,
      Input3Demo,
    };
  },
});
</script>
