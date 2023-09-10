import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './user.component';
import { MaterialModule } from '../shared/material.module';
import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  declarations: [ProductsComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    NgxStarsModule
  ],
})
export class UserModule { }
