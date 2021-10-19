<template>
  <h1>Cascader 无限级联选择</h1>
  <Demo title="基本使用" :component="Cascader1Demo" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Cascader1Demo from "../demo-code/Cascader1Demo.vue";
import Demo from "./Demo.vue";
export default defineComponent({
  name: "InputDemo",
  components: { Demo },
  setup() {
    return {
      Cascader1Demo,
    };
  },
});
</script>
