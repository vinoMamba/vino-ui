import {RouteRecordRaw} from "vue-router";

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
        {path: '/doc/intro', component: () => import("/src/components/Intro.vue")},
        {path: '/doc/install', component: () => import("/src/components/Install.vue")},
        {path: '/doc/use', component: () => import("/src/components/Use.vue")},
        {path: '/doc/button', component: () => import("/src/components/demo/ButtonDemo.vue")},
    ]
};
const basicRoutes = [RootRouter, HomeRouter];

const RouterMap: RouteRecordRaw[] = [
    ...basicRoutes,
    DocRouter
];

export default RouterMap;
