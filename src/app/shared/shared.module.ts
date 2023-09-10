import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { NgxStarsModule } from 'ngx-stars';

import { MaterialModule } from './material.module';

import { ProductDetailComponent } from './components/product-detail/product-detail.component'


@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    NgxStarsModule
  ],
  exports: [
    MaterialModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
      return {
          ngModule: SharedModule,
          providers: []
      };
  }

}