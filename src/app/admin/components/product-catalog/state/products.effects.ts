import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { loadProducts, loadProductsFailure, loadProductsSuccess } from './products.actions';
import { ProductService } from '../../../../services/product.service'; // Your product service to fetch data

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
}
