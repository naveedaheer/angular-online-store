import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isUser } from '../auth/state/auth.selector';

@Injectable({
    providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
    constructor(private store: Store, private router: Router) { }

    canActivate(): Observable<boolean | UrlTree> {
        return this.store.select(isUser).pipe(
            map((isUser) => {
                if (!isUser) {
                    return this.router.createUrlTree(['/auth/login']); // Redirect unauthorized
                }
                return true; // Authenticated
            })
        );
    }
}
