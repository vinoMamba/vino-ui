<template>
  <v-cascader v-model:selected="selected" :source="source"> </v-cascader>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VCascader } from "../lib";
import { SourceItem } from "../lib/cascader/types";
export default defineComponent({
  components: { VCascader },
  setup() {
    const selected = ref<SourceItem[]>();
    const source: SourceItem[] = [
      {
        id: 100,
        name: "安徽省",
        children: [
          {
            id: 0,
            name: "合肥市",
            children: [
              { id: 1, name: "高新区" },
              { id: 2, name: "政务区" },
              { id: 3, name: "蜀山区" },
            ],
          },
        ],
      },
      {
        id: 101,
        name: "浙江省",
        children: [
          {
            id: 0,
            name: "杭州市",
            children: [
              { id: 1, name: "西湖区" },
              { id: 2, name: "滨江区" },
              { id: 3, name: "上城区" },
            ],
          },
        ],
      },
    ];
    return { source, selected };
  },
});
</script>
