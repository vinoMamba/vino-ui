<template>
  <h1>DatePicker 日期选择器</h1>
  <Demo title="基本使用" :component="DatePicker1Demo" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import DatePicker1Demo from "../demo-code/DatePicker1Demo.vue";
import Demo from "./Demo.vue";
export default defineComponent({
  name: "InputDemo",
  components: { Demo },
  setup() {
    return {
      DatePicker1Demo,
    };
  },
});
</script>
