import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../shared/material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'


@NgModule({
  declarations: [ProductCatalogComponent, AdminComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
