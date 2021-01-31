import { createRouter, createWebHistory } from "vue-router";

const routes = [
    //==============================
    //  SINGLE PAGE LAYOUTS
    //==============================
    {
        path: "",
        component: () => import("@/layouts/main/Main.vue"),
        children: [
            {
                path: "",
                redirect: "/dashboard",
                meta: {
                    role: "",
                    authRequired: true,
                },
            },
            {
                path: "/dashboard",
                name: "dashboard",
                component: () => import("@/views/Dashboard.vue"),
                meta: {
                    role: "",
                    authRequired: true,
                },
            },
        ],
    },
    //==============================
    //  FULL PAGE LAYOUTS
    //==============================
    {
        path: "",
        component: () => import("@/layouts/full-page/FullPage.vue"),
        children: [
            {
                path: "/pages/login",
                name: "login",
                component: () => import("@/views/pages/Login.vue"),
                meta: {
                    role: "",
                    authRequired: false,
                },
            },
            {
                path: "/pages/404",
                name: "404",
                component: () => import("@/views/pages/404.vue"),
                meta: {
                    role: "",
                    authRequired: false,
                },
            },
        ],
    },
    // Redirect to 404 page, if no match found
    {
        path: "/:catchAll(.*)",
        redirect: "/pages/404",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.afterEach(() => {
//     // Remove initial loading
//     const appLoading = document.getElementById('loading-bg')
//     if (appLoading) {
//         appLoading.style.display = "none";
//     }
// })

router.beforeEach((to, from, next) => {
    try {
    } catch (error) {}
    return next();
});

export default router;
