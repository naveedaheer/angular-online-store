import { ProductResponseData } from "src/app/models/product.model";
export interface ProductState {
  products: ProductResponseData[];
  productDetail: ProductResponseData | null;
  loading: boolean;
  error: string | null;
  adding: boolean;
  deleting: boolean
}
export const initialState: ProductState = {
  products: [],
  productDetail: null,
  loading: false,
  error: null,
  adding: false,
  deleting: false
};
