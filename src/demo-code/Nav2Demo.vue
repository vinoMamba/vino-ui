<template>
  <v-nav v-model:selected="selected">
    <v-nav-item name="nav1">nav1</v-nav-item>
    <v-nav-item name="nav2">nav2</v-nav-item>
    <v-nav-item name="nav3">nav3</v-nav-item>
    <v-sub-nav>
      <template v-slot:title> subNav </template>
      <v-nav-item name="nav4">subNav1</v-nav-item>
      <v-nav-item name="nav5">subNav2</v-nav-item>
      <v-nav-item name="nav6">subNav3</v-nav-item>
    </v-sub-nav>
  </v-nav>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VNav, VNavItem, VSubNav } from "../lib";
export default defineComponent({
  components: { VNav, VNavItem, VSubNav },
  setup() {
    const selected = ref(["nav1"]);
    return {
      selected,
    };
  },
});
</script>
