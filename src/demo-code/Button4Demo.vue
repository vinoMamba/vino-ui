<template>
  <v-button>normal status</v-button>
  <v-button level="success">success</v-button>
  <v-button level="error">error</v-button>
  <v-button level="warning">warning</v-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VButton } from "../lib";

export default defineComponent({
  components: { VButton },
});
</script>
