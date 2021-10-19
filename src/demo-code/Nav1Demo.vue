<template>
  <v-nav v-model:selected="selected">
    <v-nav-item name="nav1">nav1</v-nav-item>
    <v-nav-item name="nav2">nav2</v-nav-item>
    <v-nav-item name="nav3">nav3</v-nav-item>
  </v-nav>

  <v-nav v-model:selected="selected2" :multiple="true">
    <v-nav-item name="nav1">nav1</v-nav-item>
    <v-nav-item name="nav2">nav2</v-nav-item>
    <v-nav-item name="nav3">nav3</v-nav-item>
  </v-nav>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VNav, VNavItem } from "../lib";
export default defineComponent({
  components: { VNav, VNavItem },
  setup() {
    const selected = ref(["nav1"]);
    const selected2 = ref(["nav1"]);
    return {
      selected,
      selected2,
    };
  },
});
</script>
