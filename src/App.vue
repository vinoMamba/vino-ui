<template>
  <div class="wrapper">
    <v-input value="李四" />
    <v-input value="禁用" :disabled="true" />
    <v-input value="只读" :readonly="true" />
    <v-input value="error" error="error" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VButton, VInput } from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VButton,
    VInput,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.wrapper {
  padding: 20px;
}
</style>
