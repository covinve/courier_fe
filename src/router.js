import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
import Home from "./components/Home.vue";
import GuideStates from "./components/GuideStates.vue";
import CreateGuide from "./components/CreateGuide.vue";
import UpdateGuide from "./components/UpdateGuide.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: App,
  },
  {
    path: "/user/logIn",
    name: "logIn",
    component: LogIn,
  },
  {
    path: "/user/signUp",
    name: "signUp",
    component: SignUp,
  },
  {
    path: "/user/home",
    name: "home",
    component: Home,
  },
  {
    path: "/user/guideStates",
    name: "guideStates",
    component: GuideStates,
  },
  {
    path: "/user/createGuide",
    name: "createGuide",
    component: CreateGuide,
  },
  {
    path: "/user/updateGuide",
    name: "updateGuide",
    component: UpdateGuide,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
