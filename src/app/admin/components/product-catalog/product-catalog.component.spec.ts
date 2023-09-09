import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCatalogComponent } from './product-catalog.component';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { loadProducts } from '../../state/products.actions';
import { Router } from '@angular/router';

describe('ProductCatalogComponent', () => {
  let component: ProductCatalogComponent;
  let fixture: ComponentFixture<ProductCatalogComponent>;
  let store: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCatalogComponent],
      imports: [
        RouterTestingModule, // Import RouterTestingModule for router testing
        StoreModule.forRoot({}), // Mock the store
      ],
    });
    fixture = TestBed.createComponent(ProductCatalogComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    // Mock the selectProducts selector to return a sample list of products
    spyOn(store, 'pipe').and.returnValue(of([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on ngOnInit', () => {
    const loadProductsAction = loadProducts();
    
    spyOn(store, 'dispatch');
    
    component.ngOnInit();

    // Verify that the loadProducts action is dispatched when ngOnInit is called
    expect(store.dispatch).toHaveBeenCalledWith(loadProductsAction);
  });

  it('should navigate to product detail on goToProductDetail', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    
    component.goToProductDetail(1);

    // Verify that the router.navigate method is called with the expected route
    expect(router.navigate).toHaveBeenCalledWith(['/admin/product/1']);
  });
});
