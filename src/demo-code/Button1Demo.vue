<template>
  <v-button>normal</v-button>
  <v-button :disabled="true">disabled</v-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VButton } from "../lib";

export default defineComponent({
  components: { VButton },
});
</script>
