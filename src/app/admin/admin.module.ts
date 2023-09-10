import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../shared/material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ProductCatalogComponent, AdminComponent, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatDialogModule,
  ],
})
export class AdminModule { }
