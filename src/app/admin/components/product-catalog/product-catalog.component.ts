import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadProducts } from './state/products.actions';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.sass']
})
export class ProductCatalogComponent {
  constructor(
    private store: Store<AppState>
  ) {

  }
  ngOnInit() {
    this.store.dispatch(loadProducts())
  }
}
