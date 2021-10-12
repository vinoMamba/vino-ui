<template>
  <v-slides class="wrapper" v-model:selected="selected">
    <v-slides-item name="one">
      <div class="box">1</div>
    </v-slides-item>
    <v-slides-item name="two">
      <div class="box">2</div>
    </v-slides-item>
    <v-slides-item name="three">
      <div class="box">3</div>
    </v-slides-item>
  </v-slides>

  <!-- <v-nav v-model:selected="selected">
    <v-nav-item name="home">首页</v-nav-item>
    <v-sub-nav>
      <template v-slot:title="title">关于</template>
      <v-nav-item name="culture">企业文化</v-nav-item>
      <v-nav-item name="dev">开发团队</v-nav-item>
      <v-nav-item name="contact">联系电话</v-nav-item>
    </v-sub-nav>
    <v-nav-item name="hire">招聘</v-nav-item>
  </v-nav> -->
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VNav, VNavItem, VSubNav, VSlides, VSlidesItem } from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VNavItem,
    VNav,
    VSubNav,
    VSlides,
    VSlidesItem,
  },
  setup() {
    const selected = ref("two");
    return { selected };
  },
});
</script>

<style scoped>
.box {
  width: 100%;
  height: 100px;
  background-color: #ddd;
  border: 1px solid red;
}
.wrapper {
  margin: 100px;
}
</style>
