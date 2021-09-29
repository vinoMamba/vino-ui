import resolve from "@rollup/plugin-node-resolve"; // 告诉 Rollup 如何查找外部模块
import commonjs from "@rollup/plugin-commonjs"; // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import esbuild from "rollup-plugin-esbuild";
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import vue from "rollup-plugin-vue"; // 处理vue文件
import { terser } from "rollup-plugin-terser"
// import fs from "fs-extra"; // 写文件
import path from "path";

const vueJsx = require('rollup-plugin-vue-jsx-compat')
const INPUT_PATH = path.resolve(__dirname, "../src/lib");
const OUTPUT_PATH = path.resolve(__dirname, "../dist/lib");
//
// let dirs = fs.readdirSync(`${INPUT_PATH}/components`).map((name) => {
//     return {
//         input: `${INPUT_PATH}/components/${name}/index.ts`,
//         external: ["vue"],
//         plugins: [
//             scss({include: /\.scss$/, sass: dartSass}),
//             resolve({extensions: [".vue"]}),
//             vue(),
//             vueJsx(),
//             esbuild({jsxFactory: 'vueJsxCompat'}),
//             commonjs()
//         ],
//         output: {
//             name: "index",
//             file: `${OUTPUT_PATH}/${name}/index.js`,
//             format: "es",
//         },
//     };
// });
//
// export default dirs;

export default {
    input: `${INPUT_PATH}/components/index.ts`,
    external: ["vue"],
    plugins: [
        scss({include: /\.scss$/, sass: dartSass}),
        resolve({extensions: [".vue"]}),
        vue(),
        vueJsx(),
        esbuild({jsxFactory: 'vueJsxCompat'}),
        commonjs()
    ],
    output: [{
        name: "index",
        file: `${OUTPUT_PATH}/index.js`,
        globals: {
            vue: 'Vue'
        },
        format: 'umd',
        plugins: [terser()]
    }, {
        name: "index",
        file: `${OUTPUT_PATH}/index.es.js`,
        format: "es",
        plugins: [terser()]
    }],
}

