import {defineStore} from "pinia";
import {api} from "@/api";
import {CommonData} from "@/models/commonData";

export const useWarehouseStore = defineStore('warehouse', {
    state: () => ({
        data: null as any,
        favoritesData: null as any,
        dealsData: null as any,
        filteredData: null as any,
        filter: null as any,
        favoriteIds: null as any,
        dealsIds: null as any,
        search: null as any
    }),
    actions: {
        async getFavorites() {
            if (!this.data) {
                await this.fetchProducts();
            }
            const idLocalStr = localStorage.getItem("favoritesId")

            if (idLocalStr != null){
                this.favoriteIds = JSON.parse(idLocalStr)
            } else {
                this.favoriteIds = await api.get("").then((resp: any) => {
                    return resp.data.favoriteIds
                })
            }
            if (this.favoriteIds) {
                this.favoritesData = this.data?.filter((x: any) => this.favoriteIds?.includes(x.id));
            } else {
                this.favoritesData = [];
            }
        },
        async getDeals() {
            if (!this.data) {
                await this.fetchProducts();
            }
            const idLocalStr = localStorage.getItem("dealsIds")

            if (idLocalStr != null){
                this.dealsIds = JSON.parse(idLocalStr)
            } else {
                this.dealsIds = await api.get("").then((resp: any) => {
                    return resp.data.dealsIds
                })
            }
            if (this.dealsIds) {
                this.dealsData = this.data?.filter((x: any) => this.dealsIds?.includes(x.id));
            } else {
                this.dealsData = [];
            }
        },
        async fetchProducts() {
            setTimeout(async () => {
                this.data = await api.get("").then((resp: any) => {
                    console.log(resp.data.warehouse)
                    return resp.data.warehouse
                })
                this.filter = localStorage.getItem("filter")
                if (!this.filter){
                    this.filter = "Все"
                }
                this.search = localStorage.getItem("search")
                if(!this.search){
                    this.search=""
                }
                this.setFilter(this.filter)
                this.searchData(this.search)
            }, 2000)
        },
       setFilter(filter: string) {
            this.filter = filter;
            localStorage.setItem("filter", filter)
           this.favoritesData = this.data?.filter((x: any) => this.favoriteIds?.includes(x.id));
           this.dealsData = this.data?.filter((x: any) => this.dealsIds?.includes(x.id));
            if (filter == "Все") {
                this.filteredData = this.data

            } else {
                this.filteredData = this.data.filter((x: CommonData) => x.type == filter);
                this.favoritesData = this.favoritesData.filter((x: CommonData) => x.type == filter);
                this.dealsData = this.dealsData.filter((x: CommonData) => x.type == filter);
            }
        },
       searchData(name: string) {
           this.setFilter(this.filter)
           localStorage.setItem("search", name)
            if (name) {
                this.filteredData = this.filteredData.filter((x: CommonData) => x.name.toUpperCase().indexOf(name.toUpperCase()) != -1)
                this.favoritesData = this.favoritesData.filter((x: CommonData) => x.name.toUpperCase().indexOf(name.toUpperCase()) != -1)
                this.dealsData = this.dealsData.filter((x: CommonData) => x.name.toUpperCase().indexOf(name.toUpperCase()) != -1)
            }
        },
        // addToDealsOrFavorites(id: string, value: CurrencySign) {
        //     addItemTo(id, value, this.data)
        // }
    },
});