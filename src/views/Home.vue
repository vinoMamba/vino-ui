<template>
  <div class="wrapper">
    <Nav class="home-nav"/>
    <main>
      <h1>Vino Design</h1>
      <h4>一款基于 <strong>Vue3.0</strong> 、<strong>Tailwindcss</strong> 的简易UI组件库</h4>
      <h4>使用 <strong>TypeScript</strong> ，组件采用 <strong>TSX</strong> 写法</h4>
      <router-link to="/doc" className="start">
        <SvgIcon name="start"/>
        <span>Start</span>
      </router-link>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Nav from "../components/Nav.vue";
import SvgIcon from "../components/SvgIcon.vue";

export default defineComponent({
  name: "Home",
  components: {Nav, SvgIcon},
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background: linear-gradient(140deg, rgba(79, 198, 241, 1) 0%, rgba(126, 213, 245, 1) 100%);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.26);

  .home-nav {
    position: relative;
  }

  main {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
      color: white;
      margin: 8px 0;
      font-size: 48px;
      font-weight: 700;
    }

    > h4 {
      color: white;
      margin: 8px 0;

    }

    > .start {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 32px;
      background-color: #7fcb77;
      margin: 8px 0;
      border-radius: 4px;
      color: white;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }

      svg {
        margin: 0 4px;
      }

      span {
        font-weight: 800;
        margin: 0 4px;
      }
    }
  }
}
</style>
