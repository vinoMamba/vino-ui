<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <SvgIcon name="logo" class="logo-icon"/>
      </router-link>
    </div>
    <ol class="menu">
      <li>
        <a href="https://github.com/vinoMamba/vino-blog" target="_blank">博客</a>
      </li>
      <li>
        <router-link to="/doc/button">文档</router-link>
      </li>
    </ol>
    <div class="toggle-icon" @click="setToggleState">
      <SvgIcon name="menu"/>
    </div>
  </nav>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {useToggleInject} from "../hooks";
import SvgIcon from "./SvgIcon.vue";

export default defineComponent({
  name: "Nav",
  components: {SvgIcon},
  props: {
    showMenuButton: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const {setToggleState} = useToggleInject();
    return {
      setToggleState
    };
  }
});
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lighten(#7ed5f5, 10%);
  z-index: 20;

  > .logo {
    margin-right: auto;

    svg {
      fill: white;
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;

    > li {
      padding: 0 8px;
      margin: 4px;

      > a {
        color: white;
        font-style: italic;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  > .toggle-icon {
    display: none;
  }

  @media (max-width: 500px) {
    > .logo {
      margin: auto;
    }
    > .menu {
      display: none;
    }
    > .toggle-icon {
      display: block;
      position: fixed;
      top: 16px;
      left: 16px;
    }
  }

}
</style>
