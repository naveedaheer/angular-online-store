import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductResponseData } from 'src/app/models/product.model';
import { AppState } from 'src/app/store/app.state';
import { loadProductDetail } from '../../state/products.actions';
import { selectProductDetail } from '../../state/products.selector';

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
