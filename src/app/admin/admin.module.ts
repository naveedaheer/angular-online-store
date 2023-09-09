import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../shared/material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  declarations: [ProductCatalogComponent, AdminComponent, ProductDetailComponent, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatDialogModule,
    NgxStarsModule
  ],
})
export class AdminModule { }
