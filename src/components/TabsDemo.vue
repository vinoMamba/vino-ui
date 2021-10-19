<template>
  <h1>Tabs 标签页</h1>
  <Demo title="基本使用" :component="Tabs1Demo" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Tabs1Demo from "../demo-code/Tabs1Demo.vue";
import Demo from "./Demo.vue";
export default defineComponent({
  name: "InputDemo",
  components: { Demo },
  setup() {
    return {
      Tabs1Demo,
    };
  },
});
</script>
