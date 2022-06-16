import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
  }


login (){
  this.appComponent.userIsLogged=true;
  setTimeout(() => {


    this.appComponent.isLoading=false;
    
  }, 4000);
  console.log( this.appComponent.isLoading)
  this.appComponent.isLoading=true;





}

}
