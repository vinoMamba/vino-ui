<template>
  <router-view/>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {useProvider} from "./hooks";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    useProvider();
  },
});
</script>

<style scoped>
</style>
