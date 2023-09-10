import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { loginStart } from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  public hidePassword: boolean = true;
  public loginForm: FormGroup;

  constructor(private store: Store<AppState>) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  
  onLoginSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(loginStart({ username, password }));
  }
}
