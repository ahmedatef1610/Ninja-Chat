import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";
import Chat from "@/components/Chat";

Vue.use(Router);

let routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next();
      } else {
        next({ name: "Welcome" });
      }
    },
  },
  {
    path: "*",
    redirect: { name: "Welcome" },
  },
];

export default new Router({
  routes,
  mode: "history",
});
