import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [ProductCatalogComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
