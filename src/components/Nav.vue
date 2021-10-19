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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.21);
  z-index: 20;
  background-color: white;

  > .logo {
    margin-right: auto;

    svg {
      fill: #38687d;
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
        color: #38687d;
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

    svg {
      fill: #38687d;
    }
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
