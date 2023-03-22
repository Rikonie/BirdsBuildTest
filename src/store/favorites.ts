import {defineStore} from "pinia";

export const useFavoritesStore = defineStore('warehouse', {
    state: () => ({
        data: [],
        filters: {
            searchQuery: '',
            offerType: 'all',
        },
    }),
    actions: {
        async fetchProducts() {
            // Запрос данных с использованием Axios или Fetch
        },
        updateFilters(newFilters:any) {
            this.filters = newFilters;
        },
    },
});