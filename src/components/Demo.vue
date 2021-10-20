<template>
  <h2 class="title">{{ title }}</h2>
  <div class="demo" v-for="demo in demoList" :key="demo.title" :is="demo">
    <h2>{{ demo.title }}</h2>
    <div class="demo-component">
      <component :is="demo.component"/>
    </div>
    <div class="demo-actions">
      <div class="demo-actions-button" @click="demo.codeVisible = false" v-if="demo.codeVisible">
        隐藏示例代码
      </div>
      <div class="demo-actions-button-watch" @click="demo.codeVisible = true" v-else>
        查看示例代码
      </div>
    </div>
    <div class="demo-code" v-if="demo.codeVisible">
      <pre class="language-html" v-html="getHtml(demo.component)"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export type DemoType = {
  codeVisible: boolean;
  title: string;
  component: Object;
}

const Prism = (window as any).Prism;


export default defineComponent({
  name: "Demo",
  props: {
    demoList: {
      type: Array as PropType<DemoType[]>,
      default: () => []
    },
    title: {
      type: String,
      default: "功能操作",
    },
  },
  setup() {
    const getHtml = (component: any) => {
      return Prism.highlight(
          component.__sourceCode,
          Prism.languages.html,
          "html"
      );
    };
    return {
      getHtml,
      Prism,
    };
  },
});
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.title {
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  cursor: default;
  color: #38687d;

  &:hover {
    text-decoration: underline;
  }
}

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 8px;

  &:hover {
    border: 1px solid transparent;
    box-shadow: 0 0 6px 2px rgba(56, 104, 125, 0.2);
  }

  > h2 {
    color: rgb(0, 0, 0, .6);
    font-size: 15px;
    font-weight: 500;
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
