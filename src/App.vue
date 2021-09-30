<template>
  <h6>input组件</h6>
  <div class="box">
    <v-input value="李四" @change="inputChange" />
    <v-input value="禁用" :disabled="true" />
    <v-input value="只读" :readonly="true" />
    <v-input value="error" error="error" />
  </div>
  <h6>icon组件</h6>
  <div class="box">
    <v-icon name="setting" />
  </div>
  <h6>button组件</h6>
  <div class="box">
    <v-button>Click Me</v-button>
    <hr />
    <v-button theme="button">Click Me</v-button>
    <v-button theme="link">Click Me</v-button>
    <v-button theme="text">Click Me</v-button>
    <hr />
    <v-button size="larger">Click Me</v-button>
    <v-button size="small">Click Me</v-button>
    <hr />
    <v-button level="normal">normal</v-button>
    <v-button level="success">success</v-button>
    <v-button level="warning">warning</v-button>
    <v-button level="error">error</v-button>
    <hr />
    <v-button :loading="isLoading" @click="toggleLoading">loading</v-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VButton, VInput, VIcon } from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VButton,
    VInput,
    VIcon,
  },
  setup() {
    const isLoading = ref(false);
    const toggleLoading = () => {
      isLoading.value = !isLoading.value;
      setTimeout(() => {
        isLoading.value = !isLoading.value;
      }, 3000);
    };
    const inputChange = (value: string) => {
      console.log(value);
    };
    return {
      isLoading,
      toggleLoading,
      inputChange,
    };
  },
});
</script>

<style scoped>
.box {
  padding: 20px;
}
</style>
