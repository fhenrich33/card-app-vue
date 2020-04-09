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
    path: "/pile-info/:deckId",
    name: "PileInfo",
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
