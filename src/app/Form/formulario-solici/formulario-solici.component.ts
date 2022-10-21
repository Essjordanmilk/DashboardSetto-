import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { InquilinosModel } from 'src/app/app/models/inquilinosModel';
import { SolicitudesModel } from 'src/app/app/models/SolicitudesModel';
import { SolicitudesComponent } from 'src/app/Components/solicitudes/solicitudes.component';

@Component({
  selector: 'app-formulario-solici',
  templateUrl: './formulario-solici.component.html',
  styleUrls: ['./formulario-solici.component.css']
})
export class FormularioSoliciComponent {
    solicitudForm:FormGroup; 

  constructor(public fb: FormBuilder, public service:ApiService) {
    this.solicitudForm = this.fb.group({
      'idSolicitud': ['', Validators.required],
      'documentoinqui': ['', Validators.required], 
      'tipSolicitud' : ['', Validators.required],
      'fecha': ['', Validators.required],
      'hora': ['', Validators.required],
      'estado' : ['', Validators.required],
      'idModificaciones' : ['',Validators.required] 
    });
  }

  onSubmit() {
    var idSolicitud = this.solicitudForm.controls['idSolicitud'].value
    var documentoinquilino = this.solicitudForm.controls['documentoinqui'].value
    var tipSolicitud = this.solicitudForm.controls['tipSolicitud'].value
    var fecha = this.solicitudForm.controls['fecha'].value
    var hora = this.solicitudForm.controls['hora'].value
    var estado = this.solicitudForm.controls['estado'].value
    var idModifi = this.solicitudForm.controls['idModificaciones'].value

    var informacionInquilino: SolicitudesModel = Object.assign({
      "idSolicitud": idSolicitud,
      "documentoinqui": documentoinquilino,
      "tipoSoli": tipSolicitud,
      "horaSoli": hora,
      "fechaSoli": fecha,
      "estado": estado,
      "idModificaciones": idModifi,
    })
    this.service.postAll("Solicitudes", informacionInquilino );
    alert('Thanks!');
  }

}
