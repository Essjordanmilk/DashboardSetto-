import { Injectable } from '@angular/core';

interface Data{
  name: string; 
  value: number; 
}
@Injectable({
  providedIn: 'root'
})
 

  export class DataService {
    
    private data: Data[] = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      },
        {
        "name": "UK",
        "value": 6200000
      }
    ];
  
  
    get DatosData() {
      return this.data;
    }
  

  
  }
