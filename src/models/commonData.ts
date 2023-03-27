export class CommonData {
    id: string;
    name: string;
    description: string;
    type: string;
    address: string;
    sales: string;
    productType: string;
    price: string;
    count: string;
    pricePiece: string;
    isFavorite: boolean;
    image: string;

    constructor(id: string, name: string, description: string, type: string, address: string, sales: string, productType: string,
                price: string, count: string, pricePiece: string, isFavorite: boolean, image: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.address = address;
        this.sales = sales;
        this.productType = productType;
        this.price = price;
        this.count = count;
        this.pricePiece = pricePiece;
        this.isFavorite = isFavorite
        this.image = image
    }

}