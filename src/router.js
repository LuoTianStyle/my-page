import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: () => import("./views/client/home.vue"),
            children: [
                {
                    path: "",
                    name: "Index",
                    component: (resolve) =>
                        require(["./views/client/index"], resolve),
                    meta: {
                        title: "首页",
                    },
                },
                {
                    path: "/blog",
                    name: "Blog",
                    component: (resolve) =>
                        require(["./views/client/blog"], resolve),
                    meta: {
                        title: "博客",
                    },
                },
                {
                    path: "/work",
                    name: "Work",
                    component: (resolve) =>
                        require(["./views/client/work"], resolve),
                    meta: {
                        title: "作品",
                    },
                },
                {
                    path: "/message",
                    name: "Message",
                    component: (resolve) =>
                        require(["./views/client/message"], resolve),
                    meta: {
                        title: "留言墙",
                    },
                },
                {
                    path: "/picture",
                    name: "Picture",
                    component: (resolve) =>
                        require(["./views/client/picture"], resolve),
                    meta: {
                        title: "画廊",
                    },
                },
                {
                    path: "/me",
                    name: "Me",
                    component: (resolve) =>
                        require(["./views/client/me"], resolve),
                    meta: {
                        title: "个人中心",
                    },
                },
                {
                    path: "/music",
                    name: "Music",
                    component: (resolve) =>
                        require(["./views/client/music"], resolve),
                    meta: {
                        title: "音乐",
                    },
                },
            ],
        },
    ],
});
