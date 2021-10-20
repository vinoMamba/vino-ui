<template>
  <Demo title="菜单 Nav" :demo-list="demoList"/>
</template>
<script lang="ts">
import {defineComponent, ref, shallowRef} from "vue";
import Nav1Demo from "../demo-code/Nav1Demo.vue";
import Nav2Demo from "../demo-code/Nav2Demo.vue";
import Demo, {DemoType} from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: {Demo},
  setup() {
    const demoList = ref<DemoType[]>([
      {codeVisible: false, title: '基本使用', component: shallowRef(Nav1Demo)},
      {codeVisible: false, title: '基包含subNav二级菜单', component: shallowRef(Nav2Demo)},
    ]);
    return {
      demoList
    };
  },
});
</script>
