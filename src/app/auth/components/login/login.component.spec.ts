import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { loginStart } from '../../state/auth.actions';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import the MatFormFieldModule
import { MatIconModule } from '@angular/material/icon';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [MatFormFieldModule,MatIconModule], // Add MatFormFieldModule to the imports
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jasmine.createSpy('dispatch')
          }
        }
      ]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch setLoadingSpinner and loginStart actions when onLoginSubmit is called', () => {
    // Arrange: Set values in the login form
    component.loginForm.setValue({
      username: 'admin',
      password: 'admin'
    });

    // Act: Call the onLoginSubmit method
    component.onLoginSubmit();

    // Assert: Check if the expected actions are dispatched
    expect(store.dispatch).toHaveBeenCalledTimes(2);

    // Check if setLoadingSpinner action is dispatched with status: true
    expect(store.dispatch).toHaveBeenCalledWith(setLoadingSpinner({ status: true }));

    // Check if loginStart action is dispatched with the correct username and password
    expect(store.dispatch).toHaveBeenCalledWith(loginStart({ username: 'admin', password: 'admin' }));
  });
});
