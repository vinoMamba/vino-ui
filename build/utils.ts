import {Recordable, ViteEnv} from "../src/types/global";

export function wrapperEnv(envConf: Recordable): ViteEnv {

    const ret: any = {};
    for (const envName of Object.keys(envConf)) {
        let realName = envConf[envName].replace(/\\n/g, "\n");
        realName = realName === "true" ? true : realName === "false" ? false : realName;

        if (envName === "VITE_PORT") {
            realName = Number(realName);
        }
        if (envName === "VITE_PROXY") {
            try {
                realName = JSON.parse(realName);
            } catch (error) {
            }
        }
        ret[envName] = realName;
        if (typeof realName === "string") {
            // @ts-ignore
            process.env[envName] = realName;
        } else if (typeof realName === "object") {
            // @ts-ignore
            process.env[envName] = JSON.stringify(realName);
        }
    }
    return ret;
}
