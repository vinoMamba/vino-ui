<template>
  <h1>Layout 布局</h1>
  <Demo title="基本布局" :component="Layout1Demo"></Demo>
  <Demo title="包含Sider的布局1" :component="Layout2Demo"></Demo>
  <Demo title="包含Sider的布局2" :component="Layout3Demo"></Demo>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Layout1Demo from "../demo-code/Layout1Demo.vue";
import Layout2Demo from "../demo-code/Layout2Demo.vue";
import Layout3Demo from "../demo-code/Layout3Demo.vue";
import Demo from "./Demo.vue";

export default defineComponent({
  name: "ButtonDemo",
  components: { Demo },
  setup() {
    return {
      Layout2Demo,
      Layout1Demo,
      Layout3Demo,
    };
  },
});
</script>
