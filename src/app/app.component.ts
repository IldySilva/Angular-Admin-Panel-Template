import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _userIsLogged = new BehaviorSubject<boolean>(true);
  private _isLoading = new BehaviorSubject<boolean>(false);

  get isLoading(): boolean {

    return this._isLoading.value;
  }

  set isLoading(value: boolean) {

    this._isLoading.next(value);
  }
  get userIsLogged(): boolean {

    return this._userIsLogged.value;
  }
  set userIsLogged(value: boolean) {

    this._userIsLogged.next(value)
  }
  title = 'GreatAdmin';
}
