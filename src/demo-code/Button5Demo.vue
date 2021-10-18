<template>
  <v-button :loading="loading" @click="onclick">click me</v-button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VButton } from "../lib";

export default defineComponent({
  components: { VButton },
  setup() {
    const loading = ref(false);
    const onclick = () => {
      loading.value = !loading.value;
    };
    return {
      loading,
      onclick,
    };
  },
});
</script>
