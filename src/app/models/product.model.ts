export interface ProductResponseData {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: { rate: number, count: number },
    title: string,
}

export class Product {
    constructor(
        public productName: string,
    ) { }

    getProduct(): string {
        return this.productName;
    }
}
