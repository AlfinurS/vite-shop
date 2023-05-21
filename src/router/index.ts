import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/product/:id",
    name: "ProductPage",
    component: () => import("@/pages/ProductPage.vue"),
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: () => import("@/pages/ProfilePage.vue"),
  },
  {
    path: "/cart",
    name: "CartPage",
    component: () => import("@/pages/CartPage.vue"),
  },
  {
    path: "/accessories",
    name: "AccessoriesPage",
    component: () => import("@/pages/AccessoriesPage.vue"),
  },
  {
    path: "/catalog",
    name: "CatalogPage",
    component: () => import("@/pages/CatalogPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
