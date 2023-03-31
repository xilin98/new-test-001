import { createRouter, createWebHashHistory } from "vue-router";
import {useState} from "../store";
const {userInfo} = useState();
const routes = [
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test/index.vue"),
  },
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
    component: () => import("../views/poi/PoiItem.vue"),
  },
  {
    path: "/add-poi",
    name: "add-poi",
    component: () => import("../views/add-poi/index.vue"),
  },
  {
    path: "/input-position",

    name: "input-position",
    component: () => import("../views/input-position/index.vue"),
  },
  {
    path: "/register-sub/:commandId",
    name: "register-sub",
    component: () => import("../views/subuser-register/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register/index.vue"),
  },
  {
    path: "/register-use-phone",
    name: "register-use-phone",
    component: () => import("../views/register-use-phone/index.vue"),
  },
  {
    path: "/edit-user-info",
    name: "edit-user-info",
    component: () => import("../views/edit-user-info/index.vue"),
  },
  {
    path: "/edit-poi",
    name: "edit-poi",
    component: () => import("../views/edit-poi/index.vue"),
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
        path: "/poi",
        name: "poi",
        component: () => import("../views/poi/index.vue"),
      },
      {
        path: "/single",
        name:  "single",
        component: () => import("../views/singleListing/index.vue")
      },
      {
        path: "/listing",
        name: "listing",
        component: () => import("../views/listing/index.vue"),
      },
      {
        path: "/subuser",
        name: "subuser",
        component: () => import("../views/subuser/index.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.path == "/login" ||
    to.path == "/login-use-phone" ||
    to.path == "/register" ||
    to.path == "/register-use-phone" ||
    to.path == "/register-sub" ||
    to.path == "/test"
  ) {
    next();
  } else {
    const token = userInfo?.value?.token;
    if (!token) {
      next("/login-use-phone");
    } else {
      next();
    }
  }
});

export default router;
