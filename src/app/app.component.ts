import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Setto';
  login: String = "";
  Session='';
  constructor(public loginservice: LoginService){ }

  ngOnInit(): void {
    this.Session=sessionStorage.getItem('Session')|| '{}'
    if (this.Session != null) { 
      this.loginservice.login.next("login");
    } else { 
      this.loginservice.login.next("logout");
    }

    this.loginservice.login.subscribe(value => { 
      this.login = value;
      console.log(this.login);
    })
  }

}
