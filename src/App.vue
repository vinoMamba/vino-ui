<template>
  {{ selected }}
  <v-nav v-model:selected="selected">
    <v-nav-item name="home">首页</v-nav-item>
    <v-sub-nav>
      <template v-slot:title="title">关于</template>
      <v-nav-item name="culture">企业文化</v-nav-item>
      <v-nav-item name="dev">开发团队</v-nav-item>
      <v-nav-item name="contact">联系电话</v-nav-item>
    </v-sub-nav>
    <v-nav-item name="hire">招聘</v-nav-item>
  </v-nav>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, unref } from "vue";
import { VNav, VNavItem, VSubNav } from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VNavItem,
    VNav,
    VSubNav,
  },
  setup() {
    const selected = ref(["home"]);
    return { selected };
  },
});
</script>

<style scoped>
.box {
  width: 200px;
  height: 100px;
  background-color: #ddd;
  border: 1px solid red;
}
</style>
