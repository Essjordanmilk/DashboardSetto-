import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InquilinosService {
  
  constructor(public http:HttpClient) {}


  
  url = 'https://localhost:7297/api/Inquilinoes'

  //obtener inquilinos 
  public async getAllInquilinos(controller:string){
  var DataResponse: any;  
  await this.http.get(this.url+controller).toPromise().then((resp)=>{
    DataResponse=resp; 
  }); 

  }




  put(controller:string,Body:any, Id:string){
    return this.http.put(Body,this.url+controller+"/"+Id).subscribe((resp)=>{

    }); 


  }



  Delete(controller:string,Id:string){
    return this.http.delete(this.url+controller+"/"+Id).subscribe((resp)=>{

    }); 
  }


}
