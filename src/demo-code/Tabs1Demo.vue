<template>
  <v-tabs v-model:selected="selected">
    <v-tab title="tab1">tab1</v-tab>
    <v-tab title="tab2">tab2</v-tab>
  </v-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VTabs, VTab } from "../lib";
export default defineComponent({
  components: { VTabs, VTab },
  setup() {
    const selected = ref("tab1");
    return { selected };
  },
});
</script>
