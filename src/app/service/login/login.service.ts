import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PerfilModel } from 'src/app/models/PerfilModel';

@Injectable({
  providedIn: 'root'
})

export class LoginService implements OnInit {
  usuario : PerfilModel | null = null; 
  user = new BehaviorSubject(this.usuario);
  login = new BehaviorSubject("logout"); 

  constructor() { }

  ngOnInit(): void {
    this.login.next("logout"); 
    this.user.next(null);
  }
}
  
