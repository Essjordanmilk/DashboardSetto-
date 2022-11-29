import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PerfilModel } from 'src/app/models/PerfilModel';
import { LoginService } from 'src/app/service/login/login.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    usera:PerfilModel;
    nombre=''

  constructor(private breakpointObserver: BreakpointObserver, public loginservice:LoginService) {
    this.usera= JSON.parse(localStorage.getItem('Usuario')|| '{}');
  }


  
  onSubmit(): void{
    this.loginservice.login.next('logout');
    }

  salir(){
    localStorage.setItem('login', 'logout');
    console.log('salida');
    
    }

}
