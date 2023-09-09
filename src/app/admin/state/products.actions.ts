import { createAction, props } from '@ngrx/store';
import { ProductResponseData } from 'src/app/models/product.model';

// Product List
export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction('[Products] Load Products Success', props<{ products: ProductResponseData[] }>());
export const loadProductsFailure = createAction('[Products] Load Products Failure', props<{ error: string }>());

// Product Detail
export const loadProductDetail = createAction('[Products] Load Product Detail', props<{ productId: number }>());
export const loadProductDetailSuccess = createAction('[Products] Load Product Detail Success', props<{ product: ProductResponseData }>());
export const loadProductDetailFailure = createAction('[Products] Load Product Detail Failure', props<{ error: string }>());