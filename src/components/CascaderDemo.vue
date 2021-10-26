<template>
  <Demo title="无限级联选择 Cascader" :demo-list="demoList" />
  <Api :api-list="apiList" />
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Api, { ApiType } from "./Api.vue";
import Cascader1Demo from "../demo-code/Cascader1Demo.vue";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: { Demo, Api },
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基本使用",
        component: shallowRef(Cascader1Demo),
      },
    ]);
    const apiList = ref<ApiType[]>([
      {
        attr: "source",
        notes: "数据源",
        type: "Array",
        optionalValue: "-",
        default: "-",
      },
      {
        attr: "v-model:selected",
        notes: "选中的数据",
        type: "Array",
        optionalValue: "-",
        default: "-",
      },
      {
        attr: "loadData",
        notes: "异步加载数据的方法",
        type: "Function",
        optionalValue: "-",
        default: "-",
      },
    ]);
    return {
      demoList,
      apiList,
    };
  },
});
</script>
