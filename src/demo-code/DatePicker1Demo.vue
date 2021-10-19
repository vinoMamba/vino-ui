<template>
  <v-date-picker v-model:value="value"></v-date-picker>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VDatePicker } from "../lib";
export default defineComponent({
  components: { VDatePicker },
  setup() {
    const value = ref();
    return { value };
  },
});
</script>
