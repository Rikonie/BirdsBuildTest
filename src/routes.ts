import WarehousePage from "@/pages/WarehousePage.vue";
import FavoritesPage from "@/pages/FavoritesPage.vue";
import DealsPage from "@/pages/DealsPage.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', component: WarehousePage },
    { path: '/favorites', component: FavoritesPage },
    { path: '/deals', component: DealsPage },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});