import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LocaleItem } from './models/shared.model';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { autoLogin } from './auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'angular-online-store';
  localesList: LocaleItem[] = [
    { code: 'en-US', label: 'English' },
    { code: 'ar', label: 'عربي' }
  ];

  constructor(private titleService: Title, private store: Store<AppState>) {
    this.titleService.setTitle($localize`${this.title}`);
  }
  
  ngOnInit() {
    this.store.dispatch(autoLogin());
  }

}
