import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [ProductCatalogComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
