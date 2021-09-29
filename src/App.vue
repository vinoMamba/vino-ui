<template>
  <v-button>Click Me</v-button>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {VButton} from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VButton,
  },
  setup() {
    return {};
  }
});
</script>

<style>
</style>
