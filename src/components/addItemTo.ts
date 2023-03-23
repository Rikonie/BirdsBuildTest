import {LocalStorageItem} from "@/models/localStorageItem";
import {DealsType} from "@/models/dealsType";
import {FavoritesAndWarehouseType} from "@/models/FavoritesAndWarehouseType";

type WhereToAdd = 'isFavorites' | 'inDeals' | 'paid';
type Common = FavoritesAndWarehouseType|DealsType

export const addItemTo=(id: string, value: WhereToAdd, data: Common[])=> {
    const itemStr: string | null = localStorage.getItem(id)
    if (itemStr != null) {
        let item: LocalStorageItem = JSON.parse(itemStr)
        item[value] = !item[value];
        item = {...item}
        localStorage.setItem(id, JSON.stringify(item))
    } else {
        const item = new LocalStorageItem(id, value == "isFavorites", value == "inDeals", value == "paid")
        localStorage.setItem(id, JSON.stringify(item))
    }
    const findObj:any = data.find((e: Common) => e.id == id)
    findObj[value] = !findObj[value]
}