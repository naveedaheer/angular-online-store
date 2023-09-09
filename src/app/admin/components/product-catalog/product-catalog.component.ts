import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductResponseData } from 'src/app/models/product.model';
import { AppState } from 'src/app/store/app.state';
import { loadProducts } from '../../state/products.actions';
import { selectProducts } from '../../state/products.selector';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.sass']
})
export class ProductCatalogComponent {
  products$: Observable<ProductResponseData[]>; // Observable to hold the selected products

  constructor(
    private store: Store<AppState>,
    private router: Router

  ) {
    this.products$ = this.store.pipe(select(selectProducts));

  }
  ngOnInit() {
    this.store.dispatch(loadProducts())
  }

  goToProductDetail(id:number){
    this.router.navigate([`/admin/product/${id}`]);
  }
}
