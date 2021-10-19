<template>
  <v-popover>
    <template v-slot:content> 我是弹出的内容 </template>
    <v-button>Click Me</v-button>
  </v-popover>
  <v-popover trigger="hover">
    <template v-slot:content> 我是弹出的内容 </template>
    <v-button>Hover Me</v-button>
  </v-popover>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VPopover, VButton } from "../lib";
export default defineComponent({
  components: { VPopover, VButton },
});
</script>
