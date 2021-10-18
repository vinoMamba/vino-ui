import {defineConfig, loadEnv} from "vite";
import {resolve} from "path";
// @ts-ignore
import {wrapperEnv} from "./build/utils";
import {createVitePlugins} from "./build/vite";

function pathResolve(dir: string) {
    return resolve(process.cwd(), ".", dir);
}

export default defineConfig(({command, mode}) => {
    const root = process.cwd();
    const env = loadEnv(mode, root);
    const viteEnv = wrapperEnv(env);
    const {VITE_PORT} = viteEnv;

    const isBuild = command === "build";
    return {
        root,
        resolve: {
            alias: [
                {
                    find: /\/@\//,
                    replacement: pathResolve("src") + "/"
                }
            ],
        },
        server: {
            host: true,
            port: VITE_PORT,
            //出现跨域问题再来配置
            proxy: {}
        },
        plugins: createVitePlugins(viteEnv, isBuild)
    };
});
