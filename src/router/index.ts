import { createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "HeaderComponent",
    component: () => import("../components/HeaderComponent.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
