<template>
  <v-slides>
    <v-slides-item>
      <div class="box">1</div>
    </v-slides-item>
    <v-slides-item>
      <div class="box">2</div>
    </v-slides-item>
    <v-slides-item>
      <div class="box">3</div>
    </v-slides-item>
  </v-slides>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, unref } from "vue";
import { VSlides, VSlidesItem } from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VSlides,
    VSlidesItem,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.box {
  width: 200px;
  height: 100px;
  background-color: #ddd;
  border: 1px solid red;
}
</style>
