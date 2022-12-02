import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { utcMillisecond } from 'd3';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public solicitud: any;
  public reporte:any; 
  public grafico2:any;
  public graficoLineal: any; 

  constructor(public service:ApiService) {}
  ngOnInit(): void {
    this.Solicitudes();
    this.reportes(); 
    this.circular();
    this.linear();
  }

  linear(){
    this.graficoLineal = new Chart("graficoL",{
    type: 'line',
    data: {
    labels: ['12AM-6AM', '6AM-12PM', '12PM-6PM', '6PM-12AM'],
    datasets: [{
    label: 'Flujo de visitantes en el dia',
    data: [10, 23, 20, 12, 8],
    fill: false,
    borderColor: 'rgb(123,68,99)',
    backgroundColor:'rgb(123,68,99)',
    tension: 0.1
  }]
},
      options: {
        aspectRatio:2.3,
        scales: {
          myScale: {
            type: 'logarithmic',
            position: 'left', // `axis` is determined by the position as `'y'`
          }
        }
      }
    })
  }

  circular(){
    this.grafico2 = new Chart("graficoC",{
      type: 'doughnut',
      data: {
        labels: [
          'Cantidad de solicitudes',
          'Flujo de visitantes',
          'Flujo vehicular'
        ],
        datasets: [{
          label: 'Global mounth',
          data: [43, 130, 100],
          hoverBackgroundColor:[
            'rgb(255, 99, 132)',
            'rgb(153, 102, 255)',
            'rgb(123,68,99)'
          ],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(153, 102, 255)',
            'rgb(123,68,99)'
          ],
          hoverBorderColor: [
            'rgb(153, 102, 255)',
            'purple',
            'red'
          ],
        }]
      },
      options: {
        aspectRatio:2.3,
        scales: {
          myScale: {
            type: 'logarithmic',
            position: 'left', // `axis` is determined by the position as `'y'`
          }
        }
      }
    })
  };
  


  Solicitudes() {
    this.solicitud = new Chart("solicitud", {
      type: 'bar',
      data: {
        labels: ['Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            label: 'Cantidad de Solicitudes',
            data: [43, 12, 3, 20, 17, 14],
            borderWidth: 1,
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            hoverBackgroundColor: 'rgb(153, 102, 255)',
            borderColor: [
              'rgb(153, 102, 255)',
              'rgb(153, 102, 255)',
              'rgb(153, 102, 255)',
              'rgb(153, 102, 255)',
              'rgb(153, 102, 255)',
              'rgb(153, 102, 255)',
              'rgb(153, 102, 255)'
            ],
            hoverBorderColor: 'rgb(153, 102, 255)',
          }
          ]
      },
      options: {
        aspectRatio:2.5,
        scales: {
          myScale: {
            type: 'logarithmic',
            position: 'left', // `axis` is determined by the position as `'y'`
          }
        }
      }
    });
  }

  reportes() {
    this.reporte = new Chart("report", {
      type: 'bar',
      data: {
        labels: ['Correo', 'Recibo Internet', 'Recibo Agua', 'Recibo Luz', 'Recibo Gas', 'Paquetería'],
        datasets: [
          {
            label: 'Cantidad de correspondencia según tipo',
            data: [100, 56, 342, 100, 98, 12],
            borderWidth: 1,
            backgroundColor: [
              'rgba(123,68,99, 0.2)',
              'rgba(123,68,99, 0.2)',
              'rgba(123,68,99, 0.2)',
              'rgba(123,68,99, 0.2)',
              'rgba(123,68,99, 0.2)',
              'rgba(123,68,99, 0.2)',
              'rgba(123,68,99, 0.2)'
            ],
            hoverBackgroundColor: 'rgb(123,68,99)',
            borderColor: [
              'rgb(123,68,99)',
              'rgb(123,68,99)',
              'rgb(123,68,99)',
              'rgb(123,68,99)',
              'rgb(123,68,99)',
              'rgb(123,68,99)',
              'rgb(123,68,99)'
            ],
            hoverBorderColor: 'rgb(123,68,99)',
          }
          ]
      },
      options: {
        aspectRatio:2.5,
        scales: {
          myScale: {
            type: 'logarithmic',
            position: 'left', // `axis` is determined by the position as `'y'`
          }
        }
      }
    });
  }
  
 
  

}

