<template>
  <Demo title=" 日期选择器 DatePicker" :demo-list="demoList" />
  <Api :api-list="apiList" />
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Api, { ApiType } from "./Api.vue";
import DatePicker1Demo from "../demo-code/DatePicker1Demo.vue";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: { Demo, Api },
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基本使用",
        component: shallowRef(DatePicker1Demo),
      },
    ]);
    const apiList = ref<ApiType[]>([
      {
        attr: "v-model:value",
        notes: "选中的日期",
        type: "string",
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
