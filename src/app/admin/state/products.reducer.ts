import { createReducer, on } from '@ngrx/store';
import { loadProductsSuccess } from './products.actions';
import { initialState } from './products.state';

export const productReducer = createReducer(
  initialState,
  // Define your reducer actions here using the `on` function from '@ngrx/store'
  on(loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
    };
  }),
);
