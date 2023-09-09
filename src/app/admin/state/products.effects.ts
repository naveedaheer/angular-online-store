import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { deleteProduct, deleteProductFailure, deleteProductSuccess, loadProductDetail, loadProductDetailFailure, loadProductDetailSuccess, loadProducts, loadProductsFailure, loadProductsSuccess } from './products.actions';
import { ProductService } from '../../services/product.service'; // Your product service to fetch data

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => { console.log(products); return loadProductsSuccess({ products }) }),
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )
  );

  loadProductDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductDetail),
      switchMap((action) =>
        this.productService.getProductDetail(action.productId).pipe(
          map((product) => { console.log(product); return loadProductDetailSuccess({ product }) }),
          catchError((error) => of(loadProductDetailFailure({ error })))
        )
      )
    )
  );
  
  deleteProduct$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deleteProduct),
    switchMap((action) =>
      this.productService.deleteProduct(action.productId).pipe(
        map(() => deleteProductSuccess({ productId: action.productId })),
        catchError((error) => of(deleteProductFailure({ error })))
      )
    )
  )
);
}
