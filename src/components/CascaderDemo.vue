<template>
  <Demo title="无限级联选择 Cascader" :demo-list="demoList"/>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Cascader1Demo from "../demo-code/Cascader1Demo.vue";
import Demo, {DemoType} from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: {Demo},
  setup() {
    const demoList = ref<DemoType[]>([
      {codeVisible: false, title: '基本使用', component: Cascader1Demo}
    ]);
    return {
      demoList
    };
  },
});
</script>
