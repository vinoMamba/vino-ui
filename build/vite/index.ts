import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import {PluginOption} from "vite";
import {svgBuilder} from "./svgBuilder";
import {ViteEnv} from "../../src/types/global";
import {md} from "./md";
import sourceCode from "./sourceCode";


export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
    const vitePlugins: (PluginOption | PluginOption[]) = [vue(), vueJsx()];
    //添加svg-icon插件
    vitePlugins.push(svgBuilder("./src/assets/icons/"));
    vitePlugins.push(md());
    vitePlugins.push(sourceCode());
    return vitePlugins;
}
