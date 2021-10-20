<template>
  <Demo title="输入框 Input" :demo-list="demoList"/>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Input1Demo from "../demo-code/Input1Demo.vue";
import Input2Demo from "../demo-code/Input2Demo.vue";
import Input3Demo from "../demo-code/Input3Demo.vue";
import Demo, {DemoType} from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: {Demo},
  setup() {
    const demoList = ref<DemoType[]>([
      {codeVisible: false, title: '基本使用', component: Input1Demo},
      {codeVisible: false, title: 'Input 可以设置 disabled 属性', component: Input2Demo},
      {codeVisible: false, title: 'Input 可以设置 error 属性', component: Input3Demo},
    ]);
    return {
      demoList
    };
  },
});
</script>
