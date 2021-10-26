<template>
  <Demo title="轮播组件 Slides" :demo-list="demoList" />
  <Api :api-list="apiList" />
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Api, { ApiType } from "./Api.vue";
import Slides1Demo from "../demo-code/Slides1Demo.vue";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: { Demo, Api },
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基本使用，无缝轮播，只是手动、自动播放；支持手机端滑动",
        component: shallowRef(Slides1Demo),
      },
    ]);
    const apiList = ref<ApiType[]>([
      {
        attr: "v-model:selected",
        notes: "选中的值",
        type: "string",
        optionalValue: "-",
        default: "-",
      },
      {
        attr: "autoPlay",
        notes: "自动播放",
        type: "boolean",
        optionalValue: "false / true",
        default: "true",
      },
    ]);
    return {
      demoList,
      apiList,
    };
  },
});
</script>
