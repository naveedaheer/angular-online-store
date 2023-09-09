import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./products.state";

export const PRODUCT_STATE_NAME = 'product';
// Create a feature selector for the products state
export const selectProductState = createFeatureSelector<ProductState>('product');

// Create a selector to get the products from the state
export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);