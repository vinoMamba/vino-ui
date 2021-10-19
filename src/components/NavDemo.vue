<template>
  <h1>Nav 组件</h1>
  <Demo title="基本使用" :component="Nav1Demo" />
  <Demo title="包含subNav二级菜单" :component="Nav2Demo" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Nav1Demo from "../demo-code/Nav1Demo.vue";
import Nav2Demo from "../demo-code/Nav2Demo.vue";
import Demo from "./Demo.vue";
export default defineComponent({
  name: "InputDemo",
  components: { Demo },
  setup() {
    return {
      Nav1Demo,
      Nav2Demo,
    };
  },
});
</script>
