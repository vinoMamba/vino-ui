export type Recordable<T = any> = Record<string, T>

export interface ViteEnv {
    VITE_PORT: number
    VITE_USE_MOCK: boolean
}
