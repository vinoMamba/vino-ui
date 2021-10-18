import {RouteRecordRaw} from "vue-router";
import {h} from "vue";
import Markdown from "../../components/Markdown.vue";
//@ts-ignore
import intro from "../../markdown/intro.md";
//@ts-ignore
import use from "../../markdown/use.md";
//@ts-ignore
import install from "../../markdown/install.md";

const markdown = function (value: string) {
    return h(Markdown, {content: value, key: value});
};

const RootRouter: RouteRecordRaw = {
    path: "/",
    name: "Root",
    redirect: "/home"
};
const HomeRouter: RouteRecordRaw = {
    path: "/home",
    name: "Home",
    component: () => import("/src/views/Home.vue")
};

const DocRouter: RouteRecordRaw = {
    path: "/doc",
    name: "Doc",
    component: () => import("/src/views/Doc.vue"),
    children: [
        {path: '/doc/intro', component: markdown(intro)},
        {path: '/doc/install', component: markdown(install)},
        {path: '/doc/use', component: markdown(use)},
        {path: '/doc/button', component: () => import("/src/components/demo/ButtonDemo.vue")},
    ]
};
const basicRoutes = [RootRouter, HomeRouter];

const RouterMap: RouteRecordRaw[] = [
    ...basicRoutes,
    DocRouter
];

export default RouterMap;
