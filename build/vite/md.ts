// @ts-nocheck
import marked from "marked";

const mdToJs = str => {
    const content = JSON.stringify(marked(str));
    return `export default ${content}`;
};

export function md() {
    return {
        name: "md",
        transform(code, id): Promise<{ code: string; map: SourceMap }> {
            if (id.endsWith(".md")) {
                let genCode = mdToJs(code);
                return {
                    code: genCode,
                    map: null
                };
            }
        },
        transforms: [{  // 用于 rollup // 插件
            test: context => context.path.endsWith(".md"),
            transform: ({code}) => mdToJs(code)
        }]
    };
}
