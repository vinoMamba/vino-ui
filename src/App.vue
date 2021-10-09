<template>
  <div>11111</div>
  <div class="wrapper">
    <v-cascader
      :source="source"
      :selected="selected"
      @update:selected="updateSelected"
    >
    </v-cascader>
  </div>
  <div>22222</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VCascader } from "./lib";
import { SourceItem } from "./lib/cascader/types";

export default defineComponent({
  name: "App",
  components: {
    VCascader,
  },
  setup() {
    const updateSelected = (newValue: any) => {
      console.log(newValue);
      selected.value = newValue;
    };
    const selected = ref([]);
    const source: SourceItem[] = [
      {
        name: "浙江",
        children: [
          {
            name: "杭州",
            children: [
              { name: "西湖区" },
              { name: "拱墅区" },
              { name: "萧山区" },
            ],
          },
        ],
      },
      {
        name: "安徽",
        children: [
          {
            name: "合肥",
            children: [
              { name: "庐阳区" },
              { name: "高新区" },
              { name: "政务区" },
            ],
          },
        ],
      },
    ];
    return {
      source,
      selected,
      updateSelected,
    };
  },
});
</script>

<style scoped>
.wrapper {
  padding: 48px;
}
</style>
