import { createReducer, on } from '@ngrx/store';
import { deleteProduct, deleteProductFailure, deleteProductSuccess, loadProductDetail, loadProductDetailSuccess, loadProducts, loadProductsSuccess } from './products.actions';
import { initialState } from './products.state';

export const productReducer = createReducer(
  initialState,
  // Define your reducer actions here using the `on` function from '@ngrx/store'
  on(loadProducts, (state) => ({ ...state, loading: true })),
  on(loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
      loading: false
    };
  }),

  on(loadProductDetail, (state) => ({ ...state, loading: true })),
  on(loadProductDetailSuccess, (state, action) => {
    return {
      ...state,
      productDetail: action.product,
      loading: false
    };
  }),

  on(deleteProduct, (state) => ({ ...state, deleting: true })),
  on(deleteProductSuccess, (state, { productId }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== productId),
    deleting: false,
  })),
  on(deleteProductFailure, (state, { error }) => ({ ...state, error, deleting: false }))
);
