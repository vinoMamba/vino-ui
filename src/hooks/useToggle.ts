import {inject, provide, Ref, ref} from "vue";


type ToggleContext = {
    toggleState: Ref<Boolean>;
    setToggleState: () => void;
}
const ToggleSymbol = Symbol();
export const useToggleProvide = () => {
    const toggleState = ref(false);
    const setToggleState = () => {
        toggleState.value = !toggleState.value;
    };
    provide(ToggleSymbol, {
        toggleState,
        setToggleState
    });
};

export const useToggleInject = () => {
    const toggleContext = inject<ToggleContext>(ToggleSymbol);
    if (!toggleContext) {
        throw new Error("useToggleInject must be used after useToggleProvide");
    }
    return toggleContext;
};
