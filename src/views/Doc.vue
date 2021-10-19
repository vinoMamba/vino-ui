<template>
  <div class="wrapper">
    <Nav class="doc-nav" :showMenuButton="true"></Nav>
    <div class="content-wrapper">
      <aside class="{asideToggle: toggleState.value}">
        <h4>文档</h4>
        <ul>
          <li>
            <router-link to="/doc/intro">项目介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/use">使用</router-link>
          </li>
        </ul>
        <h4>组件</h4>
        <ul>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/layout">Layout 布局</router-link>
          </li>
        </ul>
      </aside>
      <main class="{mainToggle: toggleState.value}">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Nav from "../components/Nav.vue";
import { useToggleInject } from "../hooks";

export default defineComponent({
  name: "Doc",
  components: { Nav },
  setup() {
    const { toggleState } = useToggleInject();
    return {
      toggleState,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  .doc-nav {
    background-color: #f0fafe;

    border-color: #f0f0f0;
  }

  .content-wrapper {
    display: flex;
    padding-top: 60px;

    > aside {
      height: 100%;
      width: 150px;
      padding: 64px 0;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      border-right: 1px solid #f0f0f0;
      transition: all 250ms ease-out;
      background-color: #f0fafe;

      @media (max-width: 500px) {
        left: -155px;
        &.asideToggle {
          left: 0;
        }
      }

      > h4 {
        font-size: 20px;
        font-weight: 700;
        padding: 4px 16px;
      }

      > ul {
        > li {
          > a {
            transition: all 0.25s ease;
            display: inline-block;
            width: 100%;
            padding: 4px 16px;

            &:hover,
            &.router-link-active {
              $hover: lighten(#409eff, 10%);
              background-color: $hover;
              color: white;
              transform: translate(5px, -3px);
            }
          }
        }
      }
    }

    > main {
      margin-left: 155px;
      padding: 16px 32px;
      flex-grow: 1;
      transition: all 250ms ease-out;
      @media (max-width: 500px) {
        margin-left: 0;
        &.mainToggle {
          margin-left: 155px;
        }
      }
    }
  }
}
</style>
