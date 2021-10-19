<template>
  <div class="wrapper">
    <Nav class="doc-nav" :showMenuButton="true"></Nav>
    <div class="content-wrapper">
      <aside :class="{asideToggle: toggleState }">
        <h4>文档</h4>
        <ul>
          <li @click="closeAside" v-for="item in menuList" :key="item.link">
            <router-link :to="`/doc/${item.link}`">{{ item.title }}</router-link>
          </li>
        </ul>
        <h4>组件</h4>
        <ul>
          <li @click="closeAside" v-for="item in componentList" :key="item.link">
            <router-link :to="`/doc/${item.link}`">{{ item.title }} <span>{{ item.enTitle }}</span></router-link>
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
import {defineComponent, ref} from "vue";
import Nav from "../components/Nav.vue";
import {useToggleInject} from "../hooks";

export default defineComponent({
  name: "Doc",
  components: {Nav},
  setup() {
    const menuList = ref([
      {link: "intro", title: "项目介绍"},
      {link: "install", title: "安装"},
      {link: "use", title: "使用"}
    ]);
    const componentList = ref([
      {link: "button", title: "按钮", enTitle: "Button"},
      {link: "input", title: "输入框", enTitle: "Input"},
      {link: "layout", title: "布局", enTitle: "Layout"},
      {link: "tabs", title: "标签页", enTitle: "Tabs"},
      {link: "popover", title: "弹出信息", enTitle: "Popover"},
      {link: "cascader", title: "无限级联选择", enTitle: "Cascader"},
      {link: "nav", title: "菜单", enTitle: "Nav"},
      {link: "slides", title: "轮播组件", enTitle: "Slides"},
      {link: "date-picker", title: "日期选择器", enTitle: "DatePicker"},
    ]);
    const {toggleState} = useToggleInject();
    const closeAside = () => {
      toggleState.value = !toggleState.value;
    };
    return {
      toggleState,
      closeAside,
      menuList,
      componentList
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
      background-color: white;
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
        left: -200px;
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
