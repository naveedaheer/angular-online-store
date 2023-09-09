import { ProductResponseData } from "src/app/models/product.modal";

export interface ProductState {
  products: ProductResponseData[];
  loading: boolean;
  error: string | null;
}
export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};
