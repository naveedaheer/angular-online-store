import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductResponseData } from 'src/app/models/product.modal';
import { AppState } from 'src/app/store/app.state';
import { loadProducts } from './state/products.actions';
import { selectProducts } from './state/products.selector';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.sass']
})
export class ProductCatalogComponent {
  products$: Observable<ProductResponseData[]>; // Observable to hold the selected products

  constructor(
    private store: Store<AppState>
  ) {
    this.products$ = this.store.pipe(select(selectProducts));

  }
  ngOnInit() {
    this.store.dispatch(loadProducts())
  }
}
