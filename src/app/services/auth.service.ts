import { User } from './../models/user.model';
import { Observable, of, throwError } from 'rxjs';
import { AuthResponseData } from '../models/authResponseData.model';
import { Injectable } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { autoLogout } from '../auth/state/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCredential = {
    username: 'user',
    password: 'user'
  }
  private adminCredential = {
    username: 'admin',
    password: 'admin'
  }
  timeoutInterval: any;
  constructor(private store: Store<AppState>) { }
  login(username: string, password: string): Observable<AuthResponseData> {
    // Simulate a successful login response
    if (
      (username === this.userCredential.username && password === this.userCredential.password) ||
      (username === this.adminCredential.username && password === this.adminCredential.password)
    ) {
      // If they match, simulate a successful login response
      const staticResponse: AuthResponseData = {
        displayName: `${username} Naveed`,
        idToken: 'your-id-token',
        expiresIn: '3600',
        username,
      };

      // Return the static response as an Observable
      return of(staticResponse);
    } else {
      return throwError(() => new Error('Invalid username or password'));
    }
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.username,
      data.idToken,
      expirationDate
    );
    return user;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'USER_NOT_FOUND':
        return 'User Not Found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));

    this.runTimeoutInterval(user);
  }

  runTimeoutInterval(user: User) {
    const todaysDate = new Date().getTime();
    const expirationDate = user.getExpirationDate().getTime();
    const timeInterval = expirationDate - todaysDate;

    this.timeoutInterval = setTimeout(() => {
      this.store.dispatch(autoLogout());
      //logout functionality or get the refresh token
    }, timeInterval);
  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(
        userData.username,
        userData.token,
        expirationDate
      );
      this.runTimeoutInterval(user);
      return user;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('userData');
    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }
}