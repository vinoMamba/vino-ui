<template>
  <v-tabs>
    <v-tab title="标题一">tab1</v-tab>
    <v-tab title="标题二">tab2</v-tab>
  </v-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VTabs, VTab } from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VTabs,
    VTab,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
