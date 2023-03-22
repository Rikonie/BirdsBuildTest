import {defineStore} from "pinia";
import {api} from "@/api";
import {LocalStorageItem} from "@/models/localStorageItem";
import {FavoritesAndWarehouseType} from "@/models/FavoritesAndWarehouseType";

export const useWarehouseStore = defineStore('warehouse', {
    state: () => ({
        data: null as any,
        favorites: null as any
    }),
    actions: {
        async fetchProducts() {
            setTimeout(async () => {
                const result: FavoritesAndWarehouseType[] = await api.get("").then((resp: any) => {
                    return resp.data.warehouse
                })
                result.map((i) => {
                    const itemStr: string | null = localStorage.getItem((i.id))
                    if (itemStr != null) {
                        const item: LocalStorageItem = JSON.parse(itemStr)
                            i.inDeals = item.inDeals;
                            i.inFavorites = item.isFavorite
                    }
                    this.data = result
                })
            }, 2000)
        },
        addToFavorites(id: string) {
            const itemStr: string | null = localStorage.getItem(id)
            if (itemStr != null) {
                let item: LocalStorageItem = JSON.parse(itemStr)
                item.isFavorite = !item.isFavorite;
                item = {...item}
                console.log(item)
                localStorage.setItem(id, JSON.stringify(item))
            } else {
                const item = new LocalStorageItem(id, true, false, false)
                localStorage.setItem(id, JSON.stringify(item))
            }
            const findObj = this.data.find((e:FavoritesAndWarehouseType) => e.id ==id)
            findObj.inFavorites = !findObj.inFavorites
        },
        addToDeals (id: string){
            const itemStr: string | null = localStorage.getItem(id)
            if (itemStr != null) {
                let item: LocalStorageItem = JSON.parse(itemStr)
                item.inDeals = !item.inDeals;
                item = {...item}
                console.log(item)
                localStorage.setItem(id, JSON.stringify(item))
            } else {
                const item = new LocalStorageItem(id, false, true, false)
                localStorage.setItem(id, JSON.stringify(item))
            }
            const findObj = this.data.find((e:FavoritesAndWarehouseType) => e.id ==id)
            findObj.inDeals = !findObj.inDeals
        },
        // test (id: string, value:string){
        //     const itemStr: string | null = localStorage.getItem(id)
        //     //const key = value as keyof typeof LocalStorageItem
        //     if (itemStr != null) {
        //         let item: LocalStorageItem = JSON.parse(itemStr)
        //         const key:keyof typeof item = value as keyof typeof item
        //         item[key] = ;
        //         item = {...item}
        //         console.log(item)
        //         localStorage.setItem(id, JSON.stringify(item))
        //     } else {
        //         const item = new LocalStorageItem(id, false, true, false)
        //         localStorage.setItem(id, JSON.stringify(item))
        //     }
        //     const findObj = this.data.find((e:FavoritesAndWarehouseType) => e.id ==id)
        //     findObj.inDeals = !status
        //
        // }

    },
});