
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { PerfilModel } from 'src/app/models/PerfilModel';
import { LocalstorageService } from 'src/app/service/localstorage/localstorage.service';
import { LoginService } from 'src/app/service/login/login.service';
import { ModalService } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required), 
    password: new FormControl('', Validators.required)
  }); 
  
  em = 0; 
  pass = 0;
  user:PerfilModel; 

  constructor(public modalservice:ModalService, public fb:FormBuilder, public apiservice:ApiService, public dialog:MatDialog, public loginservice: LoginService, public router:Router,  ) { }
  async onSubmit(){
    this.em = Number(this.loginForm.controls["username"].value); 
    this.pass = Number(this.loginForm.controls["password"].value); 

    var Dataresponse:any = await (this.apiservice.login("login", this.em, this.pass))
    this.user = Dataresponse[0]; 

    if(this.em == this.user.documentoPer && this.pass == this.user.documentoInqui){
      //alert("registro exitoso");
      this.router.navigateByUrl("/inquilinos");
      this.loginservice.user.next(this.user);
      this.loginservice.login.next("login");
      sessionStorage.setItem('Session', this.user.documentoInqui+this.user.nombre);
      localStorage.setItem("Usuario",JSON.stringify(this.user));
    }
  }
  ngOnInit(): void {
  }

  //this.localstorage.set(em, pass){}
  
}




