<template>
  {{ selected }}
  <v-collapse v-model:selected="selected" :single="true">
    <v-collapse-item title="标题一" name="1">内容一</v-collapse-item>
    <v-collapse-item title="标题二" name="2">内容二</v-collapse-item>
    <v-collapse-item title="标题三" name="3">内容三</v-collapse-item>
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
    const selected = ref<String[]>(["1"]);
    const demoList = ref<DemoType[]>([
      {
        codeVisible: false,
        title: "基础按钮，可以disabled属性",
        component: shallowRef(Collapse1Demo),
      },
    ]);
    return {
      demoList,
      selected,
    };
  },
});
</script>
