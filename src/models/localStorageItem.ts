export class LocalStorageItem{
    id: string;
    isFavorites: boolean;
    inDeals: boolean;
    paid: boolean

    constructor(id:string, isFavorites: boolean, inDeals: boolean, paid: boolean) {
        this.id=id;
        this.isFavorites=isFavorites;
        this.inDeals=inDeals;
        this.paid=paid
    }
}