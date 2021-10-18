<template>
  <v-input v-model="value"></v-input>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VInput } from "../lib";
export default defineComponent({
  components: { VInput },
  setup() {
    const value = ref("");
    return {
      value,
    };
  },
});
</script>
