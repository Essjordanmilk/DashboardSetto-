import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CorrespondenciaModel } from 'src/app/models/CorrespondeciaModel';
import { InquilinosModel } from 'src/app/models/InquilinosModel';
import { SolicitudesModel } from 'src/app/models/SolicitudesModel';
import { VehiculoModel } from 'src/app/models/VehiculoModel';
import { VisitanteModel } from 'src/app/models/VisitanteModel';

@Injectable({
  providedIn: 'root'
})
export class ModalService {


  inquilino:InquilinosModel;
  vehiculo:VehiculoModel;
  visitante:VisitanteModel;
  solicitudes:SolicitudesModel;
  correspondencia:CorrespondenciaModel;


  titulo = "";
  accion = new BehaviorSubject("");
  constructor() { }
}
