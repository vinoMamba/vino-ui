<template>
  <v-popover>
    <template v-slot:content> 我从上面弹出 </template>
    <v-button>top</v-button>
  </v-popover>
  <v-popover position="bottom">
    <template v-slot:content> 我从下面弹出 </template>
    <v-button>bottom</v-button>
  </v-popover>
  <v-popover position="left">
    <template v-slot:content> 我从左边弹出 </template>
    <v-button>left</v-button>
  </v-popover>
  <v-popover position="right">
    <template v-slot:content> 我从右边弹出 </template>
    <v-button>right</v-button>
  </v-popover>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VPopover, VButton } from "../lib";
export default defineComponent({
  components: { VPopover, VButton },
});
</script>
