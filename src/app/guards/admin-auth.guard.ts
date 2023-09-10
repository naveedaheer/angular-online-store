import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { autoLogout } from '../auth/state/auth.actions';
import { isAdmin } from '../auth/state/auth.selector';

@Injectable({
    providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
    constructor(private store: Store, private router: Router) { }

    canActivate(): Observable<boolean | UrlTree> {
        return this.store.select(isAdmin).pipe(
            map((isAdmin) => {
                if (!isAdmin) {
                    return this.router.createUrlTree(['/auth/login']); // Redirect unauthorized
                }
                return true; // Authenticated
            })
        );
    }
}
