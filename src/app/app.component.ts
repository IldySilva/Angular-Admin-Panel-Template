import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 private   _userIsLogged=new BehaviorSubject<boolean>(false);

get userIsLogged():boolean{

  return this._userIsLogged.value;
}
set userIsLogged(value:boolean){

   this._userIsLogged.next(value)
}
  title = 'GreatAdmin';
}
