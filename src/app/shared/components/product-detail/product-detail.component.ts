import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProductDetail } from 'src/app/admin/state/products.actions';
import { selectProductDetail } from 'src/app/admin/state/products.selector';
import { ProductResponseData } from 'src/app/models/product.model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent {
  productDetail$: Observable<ProductResponseData | null>; // Observable to hold the selected products

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.productDetail$ = this.store.pipe(select(selectProductDetail));
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(loadProductDetail({ productId: params['id'] }))
    });
  }
}
