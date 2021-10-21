# 使用

```vue 
<template>
  <v-button>normal</v-button>
  <v-button :disabled="true">disabled</v-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VButton } from "vino-ui-next";

export default defineComponent({
  components: { VButton },
});
</script>
```
[Button 按钮](#doc/button)
