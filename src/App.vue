<template>
  <v-button>确定</v-button>
  <v-button icon="setting">确定</v-button>
  <v-button icon="setting" icon-position="right">确定</v-button>
  <v-button icon="setting" icon-position="vino">确定</v-button>
  <v-icon name="setting"/>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import VButton from "./lib/button";
import VIcon from "./lib/icon";

export default defineComponent({
  name: "App",
  components: {
    VButton,
    VIcon
  }
});
</script>

<style>
</style>
