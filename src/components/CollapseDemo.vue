<template>
  <v-collapse>
    <v-collapse-item title="标题一">内容一</v-collapse-item>
    <v-collapse-item title="标题二">内容二</v-collapse-item>
    <v-collapse-item title="标题三">内容三</v-collapse-item>
  </v-collapse>
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import Collapse1Demo from "../demo-code/Collapse1Demo.vue";
import { VCollapse, VCollapseItem } from "../lib";
import Demo, { DemoType } from "./Demo.vue";

export default defineComponent({
  name: "ButtonDemo",
  components: { Demo, VCollapse, VCollapseItem },
  setup() {
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基础按钮，可以disabled属性",
        component: shallowRef(Collapse1Demo),
      },
    ]);
    return {
      demoList,
    };
  },
});
</script>
