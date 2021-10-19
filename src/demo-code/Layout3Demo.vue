<template>
  <v-layout>
    <v-sider>sider</v-sider>
    <v-layout>
      <v-header>header</v-header>
      <v-content>content</v-content>
      <v-footer>footer</v-footer>
    </v-layout>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VLayout, VHeader, VContent, VFooter, VSider } from "../lib";
export default defineComponent({
  components: { VLayout, VHeader, VContent, VFooter, VSider },
});
</script>

<style>
.v-layout {
  width: 100%;
}
.v-header,
.v-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #e6e6e6;
}
.v-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;
  background-color: #cccccc;
}
.v-sider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;
  background-color: #d9d9d9;
}
</style>
