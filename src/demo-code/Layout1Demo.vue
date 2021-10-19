<template>
  <v-layout>
    <v-header>header</v-header>
    <v-content>content</v-content>
    <v-footer>footer</v-footer>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VLayout, VHeader, VContent, VFooter } from "../lib";
export default defineComponent({
  components: { VLayout, VHeader, VContent, VFooter },
});
</script>

<style>
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
  padding: 48px;
  background-color: #cccccc;
}
</style>
