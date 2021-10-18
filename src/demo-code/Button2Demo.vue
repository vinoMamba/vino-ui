<template>
  <v-button>normal</v-button>
  <v-button theme="link">link</v-button>
  <v-button theme="text">text</v-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VButton } from "../lib";

export default defineComponent({
  components: { VButton },
});
</script>
