<template>
  <Demo title="折叠面板 Collapse" :demo-list="demoList" />
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Collapse1Demo from "../demo-code/Collapse1Demo.vue";
import Collapse2Demo from "../demo-code/Collapse2Demo.vue";
import { VCollapse, VCollapseItem } from "../lib";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "ButtonDemo",
  components: { Demo, VCollapse, VCollapseItem },
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
    return {
      demoList,
    };
  },
});
</script>
