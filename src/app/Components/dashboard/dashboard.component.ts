import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  public usuarios: any;
  public ventas: any;  

  constructor(public service:ApiService) {}

  
  ngOnInit(): void {
    this.createChart(); 
  }

  createChart(){
  
   /* this.usuarios = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
 
      data: {// values on X-Axis
        labels: this.ventas, 
         datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
                 '574', '573', '576'],
            backgroundColor: 'blue'
       
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
                   '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          } 
        ]
      },
      options: {
        
        aspectRatio:2,
        layout: {
          padding: 20
      },
      
       scales: { 
      myScale: {
        
        type: 'logarithmic',
        position: 'left',
         // `axis` is determined by the position as `'y'`
      }
    }
      }
      
    });
  }

}*/
}
}
