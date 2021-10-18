<template>
  <div class="wrapper">
    <Nav class="home-nav"/>
    <main>
      <h1>Vino Design</h1>
      <h4>一个基于 <strong>Vue3</strong> 的简易UI框架</h4>
      <router-link to="/doc" className="start">
        <SvgIcon name="start"/>
        <span>Start</span>
      </router-link>
    </main>
  </div>
  <ul class="AD">
    <li>
      <a href="https://cn.vuejs.org/index.html" target="_blank">
        <h4>Vue 3</h4>
        <SvgIcon name="Vue"/>
      </a>
    </li>
    <li>
      <a href="https://github.com/microsoft/TypeScript" target="_blank">
        <h4>TypeScript</h4>
        <SvgIcon name="typescript-def"/>
      </a>
    </li>
    <li>
      <a href="" target="_blank">
        <h4>广告位招租</h4>
        <SvgIcon name="guanggao"/>
      </a>
    </li>
  </ul>
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

.AD {
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  > li {
    width: 300px;
    padding: 20px 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    > a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > h4 {
        font-size: 28px;
        font-weight: 700;
      }


    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    > li {
      display: flex;
      width: 100%;
      height: 100px;
      align-items: center;
      justify-content: center;

      > a {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;

        > h4 {
          font-size: 20px;
          font-weight: 500;
        }

        > svg.ad-icon {
          width: 48px;
        }
      }
    }
  }
}
</style>
