<template>
  {{ selected }}
  <v-nav v-model:selected="selected">
    <v-nav-item name="home">首页</v-nav-item>
    <v-nav-item name="about">关于</v-nav-item>
    <v-nav-item name="hire">招聘</v-nav-item>
  </v-nav>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, unref } from "vue";
import { VNav, VNavItem } from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VNavItem,
    VNav,
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
