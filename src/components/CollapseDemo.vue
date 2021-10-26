<template>
  <Demo title="折叠面板 Collapse" :demo-list="demoList" />
  <Api :api-list="apiList" />
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Api, { ApiType } from "./Api.vue";
import Collapse1Demo from "../demo-code/Collapse1Demo.vue";
import Collapse2Demo from "../demo-code/Collapse2Demo.vue";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "ButtonDemo",
  components: { Demo, Api },
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基础使用，可展开多个item",
        component: shallowRef(Collapse1Demo),
      },
      {
        codeVisible: false,
        title: "设置单选，每次只展示一个item",
        component: shallowRef(Collapse2Demo),
      },
    ]);
    const apiList = ref<ApiType[]>([
      {
        attr: "v-model:selected",
        notes: "选则打开的item",
        type: "String[]",
        optionalValue: "-",
        default: "[]",
      },
      {
        attr: "single",
        notes: "每次只打开一个item",
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
