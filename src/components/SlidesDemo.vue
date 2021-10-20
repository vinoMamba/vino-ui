<template>
  <Demo title="轮播组件 Slides" :demo-list="demoList"/>
</template>
<script lang="ts">
import {defineComponent, ref, shallowRef} from "vue";
import Slides1Demo from "../demo-code/Slides1Demo.vue";
import Demo, {DemoType} from "./Demo.vue";

export default defineComponent({
  name: "InputDemo",
  components: {Demo},
  setup() {
    const demoList = ref<DemoType[]>([
      {codeVisible: false, title: '基本使用，无缝轮播，只是手动、自动播放；支持手机端滑动', component: shallowRef(Slides1Demo)}
    ]);
    return {
      demoList
    };
  },
});
</script>
