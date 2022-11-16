import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { single } from '../dashboard/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Transito Visitas', cols: 1, rows: 1 },
          { title: 'Paqueteria', cols: 1, rows: 1 },
          { title: 'Transito Vehiculos', cols: 1, rows: 1 },
          { title: 'Transito Solicitudes', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Transito Visitas', cols: 1, rows: 1 },
        { title: 'Paqueteria', cols: 1, rows: 1 },
        { title: 'Transito Vehiculos', cols: 1, rows: 1 },
        { title: 'Transito Solicitudes', cols: 1, rows: 1 }
      ];
    })
  );


 

  constructor( private breakpointObserver: BreakpointObserver ) {
    Object.assign(this, { single })
  }



  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  onSelect(event) {
    console.log(event);
  }
}