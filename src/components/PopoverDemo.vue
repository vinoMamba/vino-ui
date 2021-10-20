<template>
  <h1></h1>
  <Demo title="弹出信息 Popover" :demo-list="demoList"/>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Popover1Demo from "../demo-code/Popover1Demo.vue";
import Popover2Demo from "../demo-code/Popover2Demo.vue";
import Demo, {DemoType} from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: {Demo},
  setup() {
    const demoList = ref<DemoType[]>([
      {codeVisible: false, title: '基本使用，支持 click 弹出和 hover 弹出', component: Popover1Demo},
      {codeVisible: false, title: '可以设置Position，分别是 top、bottom、left、right', component: Popover2Demo},
    ]);
    return {
      demoList
    };
  },
});
</script>
