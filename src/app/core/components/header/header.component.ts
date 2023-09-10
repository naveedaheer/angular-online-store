import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoggedinUser } from 'src/app/auth/state/auth.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public loggedInUser: Observable<string> | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loggedInUser = this.store.select(LoggedinUser);
  }
  
}
