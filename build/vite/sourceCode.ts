/**
 * 此插件参考 https://github.com/xiuxiuyifan/z-vue3-ui/blob/master/plugins/source-code.ts
 */
// @ts-ignore
import * as fs from "fs";

export default function SourceCode() {
    return {
        name: 'source-code',
        async transform(code: any, id: string) {
            if (~id.indexOf('demo-code') && !~id.indexOf('?')) {
                let sourceCode = JSON.stringify(fs.readFileSync(id).toString());
                let genCode = code.split('export default')[0] || '';
                genCode += `_sfc_main.__sourceCode = ${sourceCode}\n`;
                genCode += `export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]])`;
                return {
                    code: genCode,
                    map: null
                };
            }
        }
    };
}
