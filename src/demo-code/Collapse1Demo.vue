<template>
  <v-collapse>
    <v-collapse-item title="标题一">内容一</v-collapse-item>
    <v-collapse-item title="标题二">内容二</v-collapse-item>
    <v-collapse-item title="标题三">内容三</v-collapse-item>
  </v-collapse>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VCollapse, VCollapseItem } from "../lib";

export default defineComponent({
  components: { VCollapse, VCollapseItem },
});
</script>
