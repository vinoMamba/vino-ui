<template>
  <div>11111</div>
  <div class="wrapper">
    <v-cascader
      :source="source"
      v-model:selected="selected"
      :load-data="loadData"
    >
    </v-cascader>
  </div>
  <div class="wrapper">
    <v-cascader :source="source1" v-model:selected="selected"> </v-cascader>
  </div>
  <div>{{ selected }}</div>
  <div>22222</div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, unref } from "vue";
import { VCascader } from "./lib";
import { db } from "./db.js";
import { SourceItem } from "./lib/cascader/types";

type DbItem = {
  id: number;
  name: string;
  parent_id: number;
  k1: string;
  k2: string;
  k3: string;
  k4: string;
  k5: string;
  k6: string;
  k7: string;
  children?: Array<DbItem>;
  isLeaf: boolean;
};

function ajax(parent_id = 0) {
  return new Promise((reslove, reject) => {
    const result = db.filter((item: DbItem) => item.parent_id === parent_id);
    result.forEach((node: DbItem) => {
      node.isLeaf =
        db.filter((item: DbItem) => item.parent_id === node.id).length <= 0;
    });

    const source = result.map((item: DbItem) => {
      return {
        id: item.id,
        name: item.name,
        children: [],
        isLeaf: item.isLeaf,
      };
    });
    reslove(source);
  });
}
export default defineComponent({
  name: "App",
  components: {
    VCascader,
  },
  setup() {
    const selected = ref<DbItem[]>([]);
    const source = ref<DbItem[]>();
    const source1 = ref([
      {
        name: "安徽",
        children: [{ name: "合肥", children: [{ name: "瑶海" }] }],
      },
    ]);
    onMounted(() => {
      ajax(0).then((result) => {
        source.value = result as DbItem[];
      });
    });
    const loadData = (node: SourceItem, updateSource: Function) => {
      ajax(node.id).then((result) => {
        updateSource(result);
      });
    };
    return {
      source,
      source1,
      selected,
      loadData,
    };
  },
});
</script>

<style scoped>
.wrapper {
  padding: 48px;
}
</style>
