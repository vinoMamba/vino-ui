<template>
  <h6>input组件</h6>
  <div class="box">
    <v-input value="李四" />
    <v-input value="禁用" :disabled="true" />
    <v-input value="只读" :readonly="true" />
    <v-input value="error" error="error" />
  </div>
  <h6>button组件</h6>
  <div class="box">
    <v-button>Click Me</v-button>
    <v-button theme="button">Click Me</v-button>
    <v-button theme="link">Click Me</v-button>
    <v-button theme="text">Click Me</v-button>
    <v-button size="larger">Click Me</v-button>
    <v-button size="small">Click Me</v-button>
    <v-button level="normal">normal</v-button>
    <v-button level="success">success</v-button>
    <v-button level="warning">warning</v-button>
    <v-button level="error">error</v-button>
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
.box {
  padding: 20px;
}
</style>
