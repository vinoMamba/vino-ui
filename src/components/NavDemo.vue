<template>
  <Demo title="菜单 Nav" :demo-list="demoList" />
  <Api :api-list="apiList" />
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Api, { ApiType } from "./Api.vue";
import Nav1Demo from "../demo-code/Nav1Demo.vue";
import Nav2Demo from "../demo-code/Nav2Demo.vue";
import Nav3Demo from "../demo-code/Nav3Demo.vue";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: { Demo, Api },
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基本使用",
        component: shallowRef(Nav1Demo),
      },
      {
        codeVisible: false,
        title: "支持多选",
        component: shallowRef(Nav3Demo),
      },
      {
        codeVisible: false,
        title: "包含subNav二级菜单",
        component: shallowRef(Nav2Demo),
      },
    ]);
    const apiList = ref<ApiType[]>([
      {
        attr: "v-model:selected",
        notes: "被选中的值",
        type: "array",
        optionalValue: "-",
        default: "-",
      },
      {
        attr: "mutiple",
        notes: "是否多选",
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
