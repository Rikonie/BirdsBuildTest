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
        search: null as any,
        loading: false
    }),
    actions: {
        async getFavorites() {
            if (!this.data) {
                await this.fetchProducts();
            }
            const idLocalStr = localStorage.getItem("favoritesIds")

            this.favoriteIds = await api.get("").then((resp: any) => {
                return resp.data.favoriteIds
            })
            if (idLocalStr) {
                this.favoriteIds = JSON.parse(idLocalStr)
            }
            if (this.favoriteIds) {
                this.data?.map((i:CommonData)=>{
                        i.isFavorite = !!this.favoriteIds?.includes(i?.id);
                    }
                )
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
            this.dealsIds = await api.get("").then((resp: any) => {
                return resp.data.dealsIds
            })
            if (idLocalStr) {
                this.dealsIds = JSON.parse(idLocalStr)
            }
            if (this.dealsIds) {
                this.dealsData = []
                this.dealsIds?.map((i: any) => {
                    const item = this.data?.find((e: CommonData) => e.id == i.id)
                    if (item) {
                        item.paid = i.paid
                        this.dealsData.push({...item})
                    }
                })
            } else {
                this.dealsData = []
            }
        },
        async fetchProducts() {
            this.loading = false;
            setTimeout(async () => {
                this.data = await api.get("").then((resp: any) => {
                    return resp.data.warehouse
                })
                this.filter = localStorage.getItem("filter")
                if (!this.filter) {
                    this.filter = "Все типы"
                }
                this.search = localStorage.getItem("search")
                if (!this.search) {
                    this.search = ""
                }
                await this.getFavorites()
                await this.setFilter(this.filter)
                await this.searchData(this.search)
                this.loading = true;
            }, 2000)
        },
        async setFilter(filter: string) {
            this.filter = filter;
            localStorage.setItem("filter", filter)
            this.favoritesData = this.data?.filter((x: any) => this.favoriteIds?.includes(x.id));
            await this.getDeals()
            if (filter == "Все типы") {
                this.filteredData = this.data
            } else {
                this.filteredData = this.data?.filter((x: CommonData) => x.type == filter);
                this.favoritesData = this.favoritesData?.filter((x: CommonData) => x.type == filter);
                this.dealsData = this.dealsData?.filter((x: CommonData) => x.type == filter);
            }
        },
        async searchData(name: string) {
            await this.setFilter(this.filter)
            localStorage.setItem("search", name)
            this.search=name
            if (name) {
                this.filteredData = this.filteredData?.filter((x: CommonData) => x.name.toUpperCase().indexOf(name.toUpperCase()) != -1)
                this.favoritesData = this.favoritesData?.filter((x: CommonData) => x.name.toUpperCase().indexOf(name.toUpperCase()) != -1)
                this.dealsData = this.dealsData?.filter((x: CommonData) => x.name.toUpperCase().indexOf(name.toUpperCase()) != -1)
            }
        },
        async addToFavorite(item: CommonData) {
            await this.getFavorites()
            const idsStr = localStorage.getItem("favoritesIds")
            if (idsStr) {
                const arrIds = JSON.parse(idsStr)
                if (!arrIds.includes(item.id)) {
                    arrIds?.push(item.id)
                } else {
                    const index = arrIds.indexOf(item.id);
                    arrIds.splice(index, 1)
                }
                this.favoriteIds = arrIds
                localStorage.setItem("favoritesIds", JSON.stringify(this.favoriteIds))
            } else {
                if (this.favoriteIds?.includes(item.id)) {
                    const index = this.favoriteIds?.indexOf(item.id)
                    this.favoriteIds?.splice(index, 1)
                } else {
                    this.favoriteIds?.push(item.id)
                }
                localStorage.setItem("favoritesIds", (JSON.stringify(this.favoriteIds)))
            }
            await this.getFavorites()
            await this.searchData(this.search)
        },
        async addToDeals(item: CommonData) {
            await this.getDeals()
            const idsStr = localStorage.getItem("dealsIds")
            if (idsStr) {
                const arrIds = JSON.parse(idsStr)
                arrIds?.push({id: item.id, paid: false})
                this.dealsIds = arrIds
            } else {
                this.dealsIds?.push({id: item.id, paid: false})
            }
            localStorage.setItem("dealsIds", (JSON.stringify(this.dealsIds)))
            await this.getDeals()
            await this.searchData(this.search)

        },
        async toPaid (item:any) {
            await this.getDeals()
            const arrStr = localStorage.getItem("dealsIds")
            if (arrStr){
                const arr = JSON.parse(arrStr)
                const el = arr.findIndex((e:any)=>e.id==item.id && e.paid == false)
                if(el!=-1){
                    arr[el].paid=true
                    this.dealsIds=arr
                }
            } else {
                const el = this.dealsIds?.findIndex((e:any)=>e.id==item.id && e.paid == false)
                if(el!=-1){
                    this.dealsIds[el].paid=true
                }
            }
            localStorage.setItem("dealsIds", (JSON.stringify(this.dealsIds)))
            await this.getDeals()
            await this.searchData(this.search)
        }
    },
});