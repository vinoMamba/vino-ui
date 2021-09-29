<template>
  <div class="p-8">
    <v-input value="李四"/>
    <hr>
    <v-input value="禁用" :disabled="true"/>
    <hr>
    <v-input value="只读" :readonly="true"/>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {VButton, VInput} from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VButton,
    VInput
  },
  setup() {
    return {};
  }
});
</script>

<style>
</style>
