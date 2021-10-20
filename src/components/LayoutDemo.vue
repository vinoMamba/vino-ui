<template>
  <Demo title="布局 Layout" :demo-list="demoList"/>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Layout1Demo from "../demo-code/Layout1Demo.vue";
import Layout2Demo from "../demo-code/Layout2Demo.vue";
import Layout3Demo from "../demo-code/Layout3Demo.vue";
import Demo, {DemoType} from "./Demo.vue";

export default defineComponent({
  name: "ButtonDemo",
  components: {Demo},
  setup() {
    const demoList = ref<DemoType[]>([
      {codeVisible: false, title: '基本布局', component: Layout1Demo},
      {codeVisible: false, title: '包含aside的布局1', component: Layout2Demo},
      {codeVisible: false, title: '包含aside的布局2', component: Layout3Demo},
    ]);
    return {
      demoList
    };
  },
});
</script>
