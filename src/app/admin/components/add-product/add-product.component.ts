import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/product.service';
import { addProduct } from '../../state/products.actions';
// import * as productActions from './state/product.actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  categories: string[] = []; // Add your categories here

  constructor(
    private dialogRef: MatDialogRef<AddProductComponent>,
    private fb: FormBuilder,
    private store: Store,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories(): void {
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      if (this.productForm.valid) {
        const productData = this.productForm.value;
        this.store.dispatch(addProduct({ product: productData }));
        // Clear the form or perform other actions as needed
        this.dialogRef.close();
      }
    }
  }
}
