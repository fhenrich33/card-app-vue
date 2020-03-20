import Vue from "vue";
import VueRouter from "vue-router";
import CardSelect from "../components/pages/CardSelect.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CardSelect",
    component: CardSelect
  },
  {
    path: "/pile-info",
    name: "PileInfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "pile-info" */ "../components/pages/PileInfo.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
