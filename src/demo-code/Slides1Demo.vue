<template>
  <v-slides v-model:selected="selected">
    <v-slides-item name="slide1">
      <div class="box">slide1</div>
    </v-slides-item>
    <v-slides-item name="slide2">
      <div class="box">slide2</div>
    </v-slides-item>
    <v-slides-item name="slide3">
      <div class="box">slide3</div>
    </v-slides-item>
  </v-slides>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VSlides, VSlidesItem } from "../lib";
export default defineComponent({
  components: { VSlides, VSlidesItem },
  setup() {
    const selected = ref("slide1");
    return { selected };
  },
});
</script>
<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #73b8ff;
  padding: 48px;
  font-size: 24px;
  color: white;
}
</style>
