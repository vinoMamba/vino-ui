<template>
  <div>11111</div>
  <div class="wrapper">
    <v-cascader :source="source" v-model:selected="selected"> </v-cascader>
  </div>
  <div>22222</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VCascader } from "./lib";
import { SourceItem } from "./lib/cascader/types";
import { db } from "./db.js";

function ajax(parent_id = 0) {
  return db.filter((item: any) => item.parent_id === parent_id);
}
export default defineComponent({
  name: "App",
  components: {
    VCascader,
  },
  setup() {
    const selected = ref([]);
    const source = ajax();
    return {
      source,
      selected,
    };
  },
});
</script>

<style scoped>
.wrapper {
  padding: 48px;
}
</style>
