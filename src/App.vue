<template>
  <div class="wrapper">
    <v-date-picker v-model:value="date" />
  </div>
  <!-- <v-nav v-model:selected="selected">
    <v-nav-item name="home">首页</v-nav-item>
    <v-sub-nav>
      <template v-slot:title="title">关于</template>
      <v-nav-item name="culture">企业文化</v-nav-item>
      <v-nav-item name="dev">开发团队</v-nav-item>
      <v-sub-nav>
        <template v-slot:title="title">联系方式</template>
        <v-nav-item name="qq">qq</v-nav-item>
        <v-nav-item name="wechat">微信</v-nav-item>
        <v-sub-nav>
          <template v-slot:title="title">手机</template>
          <v-nav-item name="yd">移动</v-nav-item>
          <v-nav-item name="lt">联通</v-nav-item>
        </v-sub-nav>
      </v-sub-nav>
    </v-sub-nav>
    <v-nav-item name="hire">招聘</v-nav-item>
  </v-nav> -->
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VButton, VNav, VNavItem, VSubNav, VDatePicker, VPopover } from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VButton,
    VNavItem,
    VNav,
    VSubNav,
    VDatePicker,
    VPopover,
  },
  setup() {
    const date = ref();
    const selected = ref(["home"]);
    return { selected, date };
  },
});
</script>

<style scoped>
.box {
  width: 100%;
  height: 100px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
.wrapper {
  margin: 200px;
}
</style>
