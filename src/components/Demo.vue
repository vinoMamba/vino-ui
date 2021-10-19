<template>
  <div class="demo">
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <div class="demo-actions-button" @click="hideCode" v-if="codeVisible">
        隐藏示例代码
      </div>
      <div class="demo-actions-button-watch" @click="showCode" v-else>
        查看示例代码
      </div>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, computed, defineComponent} from "vue";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const Prism = (window as any).Prism;

export default defineComponent({
  name: "Demo",
  props: {
    component: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: "功能操作",
    },
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
          props.component.__sourceCode,
          Prism.languages.html,
          "html"
      );
    });
    const showCode = () => (codeVisible.value = true);
    const hideCode = () => (codeVisible.value = false);
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode,
    };
  },
});
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 18px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    &-button {
      cursor: pointer;
      font-size: 14px;
      color: white;
      padding: 4px 8px;
      display: inline-block;
      background-color: $border-color;
      border-radius: 4px;

      &-watch {
        color: white;
        display: inline-block;
        background-color: #2d2d2d;
        cursor: pointer;
        font-size: 14px;
        padding: 4px 8px;
        border-radius: 4px;
      }
    }
  }

  &-code {
    overflow: auto;
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      font-size: 12px;
      line-height: 1.5;
    }
  }
}
</style>
