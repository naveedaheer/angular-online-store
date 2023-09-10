import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ProductResponseData } from 'src/app/models/product.model';
import { loadProducts } from '../../../admin/state/products.actions';
import { selectProducts } from '../../../admin/state/products.selector';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {
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

  goToProductDetail(id: number) {
    this.router.navigate([`/user/product/${id}`]);
  }
}
