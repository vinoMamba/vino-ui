<template>
  <h1>Button 按钮</h1>
  <Demo title="基础按钮，可以disabled属性" :component="Button1Demo"></Demo>
  <Demo
    title="按钮的theme分别为 normal、text、link"
    :component="Button2Demo"
  ></Demo>
  <Demo
    title="按钮的size分别为 normal、small、larger"
    :component="Button3Demo"
  ></Demo>
  <Demo
    title="按钮的 level 分别为 normal、success、warning、error"
    :component="Button4Demo"
  ></Demo>
  <Demo title="按钮可以设置 loading 状态" :component="Button5Demo"></Demo>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Button1Demo from "../demo-code/Button1Demo.vue";
import Button2Demo from "../demo-code/Button2Demo.vue";
import Button3Demo from "../demo-code/Button3Demo.vue";
import Button4Demo from "../demo-code/Button4Demo.vue";
import Button5Demo from "../demo-code/Button5Demo.vue";
import Demo from "./Demo.vue";

export default defineComponent({
  name: "ButtonDemo",
  components: { Demo },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
});
</script>
