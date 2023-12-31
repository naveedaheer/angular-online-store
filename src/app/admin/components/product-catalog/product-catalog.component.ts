import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductResponseData } from 'src/app/models/product.model';
import { AppState } from 'src/app/store/app.state';
import { deleteProduct, loadProducts } from '../../state/products.actions';
import { selectProducts } from '../../state/products.selector';
import { AddProductComponent } from '../add-product/add-product.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.sass']
})
export class ProductCatalogComponent {
  products$: Observable<ProductResponseData[]>; // Observable to hold the selected products
  displayedColumns: string[] = ['id', 'image', 'title', 'price', 'category', 'description', 'actions'];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.products$ = this.store.pipe(select(selectProducts));
  }

  ngOnInit() {
    this.store.dispatch(loadProducts())
  }

  goToProductDetail(id: number) {
    this.router.navigate([`/admin/product/${id}`]);
  }

  openConfirmationDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User clicked 'Yes', perform the action here
        this.deleteProduct(id)
      } else {
        // User clicked 'Cancel' or closed the dialog
      }
    });
  }

  deleteProduct(productId: number) {
    this.store.dispatch(deleteProduct({ productId }));
  }

  openAddProductDialog() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // You can perform actions after the modal is closed, e.g., refresh product list
    });
  }

  openEditProductDialog(product: any) {
    // Open the Add Product dialog and provide productToEdit for editing
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '400px',
      data: product, // Pass the product data for editing
    });

    dialogRef.afterClosed().subscribe(() => {
      // You can perform actions after the modal is closed, e.g., refresh product list
    });
  }
}
