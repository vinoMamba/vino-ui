<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true
    }
  }
});
</script>
