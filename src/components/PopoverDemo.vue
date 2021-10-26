<template>
  <h1></h1>
  <Demo title="弹出信息 Popover" :demo-list="demoList" />
  <Api :api-list="apiList" />
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Api, { ApiType } from "./Api.vue";
import Popover1Demo from "../demo-code/Popover1Demo.vue";
import Popover2Demo from "../demo-code/Popover2Demo.vue";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: { Demo, Api },
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基本使用，支持 click 弹出和 hover 弹出",
        component: shallowRef(Popover1Demo),
      },
      {
        codeVisible: false,
        title: "可以设置Position，分别是 top、bottom、left、right",
        component: shallowRef(Popover2Demo),
      },
    ]);
    const apiList = ref<ApiType[]>([
      {
        attr: "position",
        notes: "弹出的方向",
        type: "string",
        optionalValue: "top / left / bottom / right",
        default: "top",
      },
      {
        attr: "trigger",
        notes: "打开弹出框的方式",
        type: "string",
        optionalValue: "click / hover",
        default: "click",
      },
    ]);
    return {
      demoList,
      apiList,
    };
  },
});
</script>
