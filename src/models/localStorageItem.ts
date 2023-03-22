export class LocalStorageItem{
    id: string;
    isFavorite: boolean;
    inDeals: boolean;
    paid: boolean

    constructor(id:string, isFavorite: boolean, inDeals: boolean, paid: boolean) {
        this.id=id;
        this.isFavorite=isFavorite;
        this.inDeals=inDeals;
        this.paid=paid
    }
}