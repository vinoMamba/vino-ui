<template>
  <div class="wrapper">
    <Nav class="home-nav"/>
    <main>
      <h1>Vino Design</h1>
      <h4>一款基于 <strong>Vue3.0</strong> 、<strong>Tailwindcss</strong> 的简易UI组件库</h4>
      <h4>使用 <strong>TypeScript</strong> ，组件采用 <strong>TSX</strong> 写法</h4>
      <div class="button-wrapper">
        <router-link to="/doc/intro" className="start">
          <SvgIcon name="start"/>
          <span>开始使用</span>
        </router-link>
        <a href="https://github.com/vinoMamba/vino-ui" target="_blank" className="start">
          <SvgIcon name="github"/>
          <span>GitHub</span>
        </a>
      </div>
    </main>
    <div class="ocean">
      <div class="wave"/>
      <div class="wave"/>
    </div>
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
body {
  overflow: hidden;
}

.ocean {
  height: 5vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #38687d;
}

.wave {
  background: url('../assets/icons/wave.svg') repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
}

.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper {
  overflow: hidden;
  position: relative;
  height: 100vh;
  //background: #21d0ee;
  //background: linear-gradient(180deg, rgba(85, 200, 241, 1) 0%, rgba(54, 96, 116, 1) 100%);
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(83, 191, 230, 1) 100%);
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
      font-style: italic;
      color: #38687d;
      margin: 8px 0;
      font-size: 48px;
      font-weight: 700;
    }

    > h4 {
      color: #38687d;
      margin: 8px 0;

      strong {
        font-style: italic;
      }
    }

    .start {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      background-color: #7fcb77;
      margin: 8px;
      border-radius: 4px;
      color: white;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

      &:hover {
        text-decoration: underline;
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
