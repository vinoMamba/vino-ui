<template>
  <Demo title="按钮 Button" :demo-list="demoList"/>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Button1Demo from "../demo-code/Button1Demo.vue";
import Button2Demo from "../demo-code/Button2Demo.vue";
import Button3Demo from "../demo-code/Button3Demo.vue";
import Button4Demo from "../demo-code/Button4Demo.vue";
import Button5Demo from "../demo-code/Button5Demo.vue";
import Demo, {DemoType} from "./Demo.vue";

export default defineComponent({
  name: "ButtonDemo",
  components: {Demo},
  setup() {
    const demoList = ref<DemoType[]>(
        [
          {codeVisible: false, title: "基础按钮，可以disabled属性", component: Button1Demo},
          {codeVisible: false, title: "按钮的theme分别为 normal、text、link", component: Button2Demo},
          {codeVisible: false, title: "按钮的size分别为 normal、small、larger", component: Button3Demo},
          {codeVisible: false, title: "按钮的 level 分别为 normal、success、warning、error", component: Button4Demo},
          {codeVisible: false, title: "按钮可以设置 loading 状态", component: Button5Demo},
        ]
    );
    return {
      demoList,
    };
  },
});
</script>
