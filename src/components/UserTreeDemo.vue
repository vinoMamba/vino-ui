<template>
  <Demo title="人员选择 userTree" :demo-list="demoList" />
  <Api :api-list="apiList" />
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Api, { ApiType } from "./Api.vue";
import UserTreeDemo from "../demo-code/UserTreeDemo.vue";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: { Demo, Api },
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基本使用",
        component: shallowRef(UserTreeDemo),
      },
    ]);
    const apiList = ref<ApiType[]>([
      {
        attr: "v-model:selected",
        notes: "是否选中",
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
