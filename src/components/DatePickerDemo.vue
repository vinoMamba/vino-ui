<template>
  <Demo title=" 日期选择器 DatePicker" :demo-list="demoList"/>
</template>
<script lang="ts">
import {defineComponent, ref, shallowRef} from "vue";
import DatePicker1Demo from "../demo-code/DatePicker1Demo.vue";
import Demo, {DemoType} from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: {Demo},
  setup() {
    const demoList = ref<DemoType[]>([
      {codeVisible: false, title: '基本使用', component: shallowRef(DatePicker1Demo)}
    ]);
    return {
      demoList
    };
  },
});
</script>
