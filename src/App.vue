<template>
  <v-layout class="layout">
    <v-sider>sider</v-sider>
    <v-layout class="inner-layout">
      <v-header>header</v-header>
      <v-content>content</v-content>
      <v-footer>footer</v-footer>
    </v-layout>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VLayout, VHeader, VContent, VFooter, VSider } from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VLayout,
    VHeader,
    VContent,
    VFooter,
    VSider,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.layout {
  height: 100vh;
}
.layout > header {
  height: 10vh;
}
.layout > footer {
  height: 10vh;
}
.inner-layout {
  flex-grow: 1;
}
</style>
