import {CommonData} from "@/models/commonData";

export class FavoritesAndWarehouseType extends CommonData {

    inDeals: boolean;
    inFavorites: boolean;

    constructor(inDeals: boolean, inFavorites: boolean, id: string, name: string, description: string, type: string, address: string, sales: string, productType: string,
                price: string, count: string, pricePiece: string, image: string) {

        super(id, name, description, type, address, sales, productType, price, count, pricePiece, image);

        this.inDeals = inDeals;
        this.inFavorites = inFavorites
    }
}