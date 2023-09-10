import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from '../shared/components/product-detail/product-detail.component';
import { AdminComponent } from './admin.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        component: ProductCatalogComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
