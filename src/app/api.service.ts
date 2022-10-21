import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})

export class ApiService {
  url = 'https://localhost:7297/api/'; 
  constructor(public http: HttpClient) {}


  public async getAll(controller:String){
    var result:any;
    await this.http.get(this.url+controller).toPromise().then((res)=>{
      result=res;
    });
    return result;
  }
  
  postAll(controller:string, body:any) {
    return this.http.post(this.url+controller, body).subscribe((res)=>{

    });
  }



}
  

