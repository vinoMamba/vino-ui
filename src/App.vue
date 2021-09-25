<template>
  <v-button icon="setting">确定</v-button>
  <v-button icon="setting" icon-position="right">确定</v-button>
  <v-button icon="setting">确定</v-button>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import VButton from "./lib/button/button";

export default defineComponent({
  name: "App",
  components: {
    VButton
  }
});
</script>

<style>
</style>
