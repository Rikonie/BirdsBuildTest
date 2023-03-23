import {CommonData} from "@/models/commonData";

export class DealsType extends CommonData {

    paid: boolean;
    isFavorites: boolean;

    constructor(paid: boolean, isFavorites: boolean, id: string, name: string, description: string, type: string, address: string, sales: string, productType: string,
                price: string, count: string, pricePiece: string, image: string) {

        super(id, name, description, type, address, sales, productType, price, count, pricePiece, image);

        this.paid = paid;
        this.isFavorites = isFavorites
    }
}