import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [ProductsComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
})
export class UserModule { }
