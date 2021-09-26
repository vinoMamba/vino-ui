import {defineComponent, onMounted, ref} from "vue";
import "./style/buttonGroup.scss";

const elementValid = (root: HTMLDivElement) => {
    const children = root?.children;
    if (children) {
        for (let node of children) {
            const name = node.nodeName.toLowerCase();
            if (name !== 'button') {
                console.warn(`v-button-group 的子元素必须是 v-button, 但是出现了 ${name} 元素`);
            }
        }
    }
};

export default defineComponent({
    name: 'VButtonGroup',
    setup(props, {slots}) {
        const root = ref<HTMLDivElement>();
        onMounted(() => {
            elementValid(root.value!);
        });
        return () => (
            <div ref={root} class="v-button-group">
                {slots.default ? slots.default() : ''}
            </div>
        );
    }
});
