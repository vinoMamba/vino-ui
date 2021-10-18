<template>
  <v-button>normal size</v-button>
  <v-button size="small">small button</v-button>
  <v-button size="larger">larger button</v-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VButton } from "../lib";

export default defineComponent({
  components: { VButton },
});
</script>
