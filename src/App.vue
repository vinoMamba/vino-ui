<template>
  <h4>button组件</h4>
  <v-button @click="click">确定</v-button>
  <v-button :loading="loading" @click="toggleLoading">确定</v-button>
  <v-button :loading="true" icon-position="right">确定</v-button>
  <v-button icon="setting">确定</v-button>
  <v-button icon="setting" icon-position="right">确定</v-button>
  <h4>icon组件</h4>
  <v-icon name="setting"/>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import VButton from "./lib/button";
import VIcon from "./lib/icon";

export default defineComponent({
  name: "App",
  components: {
    VButton,
    VIcon
  },
  setup() {
    const loading = ref(false);
    const click = () => {
      window.alert('点击了');
    };
    const toggleLoading = () => {
      loading.value = !loading.value;
      setTimeout(() => {
        loading.value = !loading.value;
      }, 3000);
    };
    return {
      click,
      toggleLoading,
      loading
    };
  }
});
</script>

<style>
</style>
