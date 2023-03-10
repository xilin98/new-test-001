import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/login-use-phone",
    name: " login-use-phone",
    component: () => import("../views/login-use-phone/index.vue"),
  },
  {
    path: "/poi-item",
    name: "poi-item",
    component: () => import("../views/poi/components/PoiItem.vue"),
  },
  {
    path: "/add-poi",
    name: "add-poi",
    component: () => import("../views/add-poi/index.vue"),
  },
  {
    path: "/test/input-position",

    name: "test-input-position",
    component: () => import("../views/input-position/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register/index.vue"),
  },
  {
    path: "/poi-edit",
    name: "poi-edit",
    component: () => import("../views/poi-edit/index.vue"),
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("../views/layout/index.vue"),
    children: [
      {
        path: "/home",
        alias: "/",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/analysis",
        name: "analysis",
        component: () => import("../views/analysis/index.vue"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../views/my/index.vue"),
      },

      {
        path: "/edit-user-info",
        name: "edit-user-info",
        component: () => import("../views/edit-user-info/index.vue"),
      },
      {
        path: "/poi",
        name: "poi",
        component: () => import("../views/poi/index.vue"),
      },
      {
        path: "/listing",
        name: "listing",
        component: () => import("../views/listing/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.path == "/login" || to.path == "/register") {
//     next();
//   } else {
//     let token = localStorage.getItem("token");
//     if (token == null || token == "") {
//       next("/login");
//     } else {
//       next();
//     }
//   }
// });

export default router;
