import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { PerfilModel } from 'src/app/models/PerfilModel';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  //Direccion Swagger 
  url = 'https://localhost:7297/api/';
  constructor(public http: HttpClient) {}


  //Servicio para mostrar los datos almacenados en la base de datos 
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

  //Ingresar los datos a la base de datos
  post(controller: string, body: any) {
    return this.http.post(this.url + controller, body).subscribe((res) => {});
  }

  //servicio para eliminar registros en la base de datos 
  delete(controller: string, Id: String) {
      return this.http.delete(this.url + controller + "/" + Id);
      
  }

  //crear registro desde el formulario 
  create(controller: string, body: any) {
    return this.http.post(this.url + controller, body);
  }

  //actualziar informacion en la base de datos
  update(controller:string, id:string, body:any) {
    return this.http.put(this.url+controller+ "/" +id, body);
  }

  async Put(controller: String, Body: any, Id: string) {
    return await this.http
      .put(this.url + controller + "/" + identifierName, Body)
      .toPromise()
      .then((res) => {});
  }

  //servicio del login 
  public async login(controller:string, email:Number, password:Number){
    var DataResponse:PerfilModel; 
    DataResponse = await this.http.get(this.url+controller+ "/" +email+"/" +password).toPromise().then((res:any) => res );
    return DataResponse; 
  }

}
