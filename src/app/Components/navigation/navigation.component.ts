import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PerfilModel } from 'src/app/models/PerfilModel';


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
    nombre="";

  constructor(private breakpointObserver: BreakpointObserver) {
    this.usera= JSON.parse(localStorage.getItem("Usuario")|| '{}');
  }
ngOnInit(): void{
this.nombre=this.usera.nombre;
}

}
