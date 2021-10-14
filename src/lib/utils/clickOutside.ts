import { Directive } from "vue";
type Callbacks = {
  el: any;
  callback: Function;
};

const onClickDocument = (e: Event) => {
  const { target } = e;
  callbacks.forEach((item) => {
    if (target === item.el || item.el.contains(target)) {
      return;
    } else {
      item.callback();
    }
  });
};
document.addEventListener("click", onClickDocument);

const callbacks: Callbacks[] = [];
const clickOutsideDiretive: Directive = {
  mounted(el, binding) {
    callbacks.push({ el, callback: binding.value });
  },
};

const removeListener = () => {
  document.removeEventListener("click", onClickDocument);
};

export { removeListener, clickOutsideDiretive };
