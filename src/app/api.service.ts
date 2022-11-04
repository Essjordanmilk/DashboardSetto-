import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { PerfilModel } from 'src/app/models/PerfilModel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://localhost:7297/api/';
  constructor(public http: HttpClient) {}

  public async getAll(controller: String) {
    var result: any;
    await this.http
      .get(this.url + controller)
      .toPromise()
      .then((res) => {
        result = res;
      });
    return result;
  }

  post(controller: string, body: any) {
    return this.http.post(this.url + controller, body).subscribe((res) => {});
  }

  async Put(controller: String, Body: any, Id: string) {
    return await this.http
      .put(this.url + controller + "/" + identifierName, Body)
      .toPromise()
      .then((res) => {});
  }

  delete(controller: string, Id: String) {
      return this.http.delete(this.url + controller + "/" + Id);
      
  }

  create(controller: string, body: any) {
    return this.http.post(this.url + controller, body);
  }


  update(controller:string, id:string, body:any) {
    return this.http.put(this.url+controller+ "/" +id, body);
  }

  public async login(controller:string, email:Number, password:Number){
    var DataResponse:PerfilModel; 
    DataResponse = await this.http.get(this.url+controller+ "/" +email+"/" +password).toPromise().then((res:any) => res );
    return DataResponse; 
  }

}
