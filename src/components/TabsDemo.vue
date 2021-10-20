<template>
  <Demo title="标签页 Tabs" :demo-list="demoList"/>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Tabs1Demo from "../demo-code/Tabs1Demo.vue";
import Demo, {DemoType} from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: {Demo},
  setup() {
    const demoList = ref<DemoType[]>([
      {codeVisible: false, title: '基本使用', component: Tabs1Demo}
    ]);
    return {
      demoList
    };
  },
});
</script>
