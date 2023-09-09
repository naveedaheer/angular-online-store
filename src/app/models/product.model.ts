export interface ProductResponseData {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: { rate: number, count: number },
    title: string,
}

export interface AddProduct {
    title: string,
    description: string,
    price: number,
    category: string,
}
export class Product {
    constructor(
        public productName: string,
    ) { }

    getProduct(): string {
        return this.productName;
    }
}
