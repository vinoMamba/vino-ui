<template>
  <div class="wrapper">
    <h4>Attributes</h4>
    <div class="api">
      <ul>
        <li class="api-title">
          <span>属性</span>
          <span>说明</span>
          <span>类型</span>
          <span>可选值</span>
          <span>默认值</span>
        </li>
        <li v-for="item in apiList" class="api-item">
          <span>{{ item.attr }}</span>
          <span>{{ item.notes }}</span>
          <span>{{ item.type }}</span>
          <span>{{ item.optionalValue }}</span>
          <span>{{ item.default }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface ApiType {
  attr: string;
  notes: string;
  type: string;
  optionalValue: string;
  default: string;
}
const ApiProps = {
  apiList: {
    type: Array as PropType<ApiType[]>,
  },
} as const;

export default defineComponent({
  name: "Api",
  props: ApiProps,
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 16px;
  h4 {
    font-style: italic;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 8px;
  }
  .api {
    li {
      font-size: 14px;
      padding: 16px 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid #d9d9d9;
      color: rgba(0, 0, 0, 0.6);

      &:first-child {
        font-size: 15px;
        color: rgba(0, 0, 0, 0.85);
      }
      &:last-child {
        border-bottom: none;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25%;
      }
    }
  }
}
</style>
