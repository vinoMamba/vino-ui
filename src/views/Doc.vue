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
            <router-link to="/doc/button">按钮 <span>Button</span></router-link>
          </li>
          <li>
            <router-link to="/doc/input">输入框 <span>Input</span></router-link>
          </li>
          <li>
            <router-link to="/doc/layout">布局 <span>Layout</span></router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">标签页 <span>Tabs</span></router-link>
          </li>
          <li>
            <router-link to="/doc/popover">弹出信息 <span>Popover</span></router-link>
          </li>
          <li>
            <router-link to="/doc/cascader">无限级联选择 <span>Cascader</span></router-link>
          </li>
          <li>
            <router-link to="/doc/nav">菜单 <span>Nav</span></router-link>
          </li>
          <li>
            <router-link to="/doc/slides">轮播组件 <span>Slides</span></router-link>
          </li>
          <li>
            <router-link to="/doc/date-picker">日期选择器 <span>DatePicker</span></router-link>
          </li>
        </ul>
      </aside>
      <main :class="{mainToggle: toggleState}">
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import Nav from "../components/Nav.vue";
import {useToggleInject} from "../hooks";

export default defineComponent({
  name: "Doc",
  components: {Nav},
  setup() {
    const {toggleState} = useToggleInject();
    return {
      toggleState,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  .content-wrapper {
    display: flex;
    padding-top: 60px;

    > aside {
      font-size: 14px;
      height: 100%;
      width: 200px;
      padding: 64px 0;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      border-right: 1px solid #f0f0f0;
      transition: all 250ms ease-out;

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
            color: rgba(0, 0, 0, 0.85);
            transition: all 0.25s ease;
            display: inline-block;
            width: 100%;
            padding: 4px 16px;

            span {
              font-style: italic;
              color: #9ea4aa;
            }

            &:hover,
            &.router-link-active {
              $hover: #38687d;
              background-color: $hover;
              color: white;
              transform: translate(5px, -3px);

              span {
                color: white;
              }
            }
          }
        }
      }
    }

    > main {
      margin-left: 200px;
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
