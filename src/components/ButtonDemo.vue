<template>
  <Demo title="按钮 Button" :demo-list="demoList" />
  <Api :api-list="apiList" />
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Api, { ApiType } from "./Api.vue";
import Button1Demo from "../demo-code/Button1Demo.vue";
import Button2Demo from "../demo-code/Button2Demo.vue";
import Button3Demo from "../demo-code/Button3Demo.vue";
import Button4Demo from "../demo-code/Button4Demo.vue";
import Button5Demo from "../demo-code/Button5Demo.vue";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "ButtonDemo",
  components: { Demo, Api },
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基础按钮，可以disabled属性",
        component: shallowRef(Button1Demo),
      },
      {
        codeVisible: false,
        title: "按钮的theme分别为 normal、text、link",
        component: shallowRef(Button2Demo),
      },
      {
        codeVisible: false,
        title: "按钮的size分别为 normal、small、larger",
        component: shallowRef(Button3Demo),
      },
      {
        codeVisible: false,
        title: "按钮的 level 分别为 normal、success、warning、error",
        component: shallowRef(Button4Demo),
      },
      {
        codeVisible: false,
        title: "按钮可以设置 loading 状态",
        component: shallowRef(Button5Demo),
      },
    ]);
    const apiList = ref<ApiType[]>([
      {
        attr: "theme",
        type: "String",
        notes: "主题",
        optionalValue: "button / link / text",
        default: "button",
      },
      {
        attr: "size",
        type: "String",
        notes: "大小",
        optionalValue: "normal / larger / small",
        default: "normal",
      },
      {
        attr: "level",
        type: "String",
        notes: "状态",
        optionalValue: "normal / success/ warning / error",
        default: "normal",
      },
      {
        attr: "loading",
        type: "boolean",
        notes: "加载中",
        optionalValue: "false / true",
        default: "false",
      },
      {
        attr: "disabled",
        type: "boolean",
        notes: "禁用",
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
