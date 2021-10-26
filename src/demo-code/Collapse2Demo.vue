<template>
  <v-collapse v-model:selected="selected" :single="true">
    <v-collapse-item title="标题一" name="1">
      　　湖人总冠军是怎么回事呢？湖人相信大家都很熟悉，但是湖人
      总冠军是怎么回事呢，下面就让小编带大家一起了解吧。湖人
      总冠军，其实就是湖人总冠军，大家可能会很惊讶湖人
      怎么会总冠军呢？但事实就是这样，小编也感到非常惊讶。这就是关于湖人
      总冠军的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！
    </v-collapse-item>
    <v-collapse-item title="标题二" name="2">
      　　湖人总冠军是怎么回事呢？湖人相信大家都很熟悉，但是湖人
      总冠军是怎么回事呢，下面就让小编带大家一起了解吧。湖人
      总冠军，其实就是湖人总冠军，大家可能会很惊讶湖人
      怎么会总冠军呢？但事实就是这样，小编也感到非常惊讶。这就是关于湖人
      总冠军的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！
    </v-collapse-item>
    <v-collapse-item title="标题三" name="3">
      　　湖人总冠军是怎么回事呢？湖人相信大家都很熟悉，但是湖人
      总冠军是怎么回事呢，下面就让小编带大家一起了解吧。湖人
      总冠军，其实就是湖人总冠军，大家可能会很惊讶湖人
      怎么会总冠军呢？但事实就是这样，小编也感到非常惊讶。这就是关于湖人
      总冠军的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！
    </v-collapse-item>
  </v-collapse>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { VCollapse, VCollapseItem } from "../lib";

export default defineComponent({
  components: { VCollapse, VCollapseItem },
  setup() {
    const selected = ref<String[]>(["1"]);
    return { selected };
  },
});
</script>
