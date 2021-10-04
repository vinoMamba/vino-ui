<template>
  <v-cascader :source="source"> </v-cascader>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VCascader } from "./lib";

export default defineComponent({
  name: "App",
  components: {
    VCascader,
  },
  setup() {
    const source = [
      {
        name: "浙江",
        children: [
          {
            name: "杭州",
            children: [
              { name: "西湖区" },
              { name: "拱墅区" },
              { name: "滨江区" },
            ],
          },
          {
            name: "宁波",
            children: [
              { name: "鄞州区" },
              { name: "镇海区" },
              { name: "北仑区" },
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
              { name: "高新区" },
              { name: "政务区" },
              { name: "庐阳区" },
            ],
          },
        ],
      },
    ];
    return {
      source,
    };
  },
});
</script>

<style scoped></style>
