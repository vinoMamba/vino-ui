<template>
  <Demo title="输入框 Input" :demo-list="demoList" />
  <Api :api-list="apiList" />
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Api, { ApiType } from "./Api.vue";
import Input1Demo from "../demo-code/Input1Demo.vue";
import Input2Demo from "../demo-code/Input2Demo.vue";
import Input3Demo from "../demo-code/Input3Demo.vue";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: { Demo, Api },
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基本使用",
        component: shallowRef(Input1Demo),
      },
      {
        codeVisible: false,
        title: "Input 可以设置 disabled 属性",
        component: shallowRef(Input2Demo),
      },
      {
        codeVisible: false,
        title: "Input 可以设置 error 属性",
        component: shallowRef(Input3Demo),
      },
    ]);
    const apiList = ref<ApiType[]>([
      {
        attr: "v-model:value",
        notes: "输入的值",
        type: "string",
        optionalValue: "-",
        default: "-",
      },
      {
        attr: "disabled",
        notes: "禁用",
        type: "boolean",
        optionalValue: "false / true",
        default: "false",
      },
      {
        attr: "placeholder",
        notes: "提示信息",
        type: "string",
        optionalValue: "-",
        default: "-",
      },
      {
        attr: "readonly",
        notes: "只读",
        type: "boolean",
        optionalValue: "false / true",
        default: "false",
      },
      {
        attr: "error",
        notes: "错误提示",
        type: "boolean",
        optionalValue: "false / true",
        default: "false",
      },
    ]);
    return {
      demoList,
      apiList,
    };
  },
});
</script>
