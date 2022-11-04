import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { SolicitudesModel } from 'src/app/models/SolicitudesModel';


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

  infoInquilino:SolicitudesModel = {
    idSolicitud: 0,
    documentoinqui: 0,
    tipoSoli: "",
    horaSoli: "",
    fechaSoli: "",
    estado: "",
    idModificaciones: 0,
  }


  onSubmit() {
    this.infoInquilino.idSolicitud = Number(this.solicitudForm.controls['idSolicitud'].value)
    this.infoInquilino.documentoinqui = Number(this.solicitudForm.controls['documentoinqui'].value)
    this.infoInquilino.tipoSoli = this.solicitudForm.controls['tipSolicitud'].value
    this.infoInquilino.fechaSoli = this.solicitudForm.controls['fecha'].value
    this.infoInquilino.horaSoli = this.solicitudForm.controls['hora'].value
    this.infoInquilino.estado = this.solicitudForm.controls['estado'].value
    this.infoInquilino.idModificaciones = Number(this.solicitudForm.controls['idModificaciones'].value)


    this.service.create("Solicitudes", this.infoInquilino ).subscribe(resp=>{
      console.log(resp);
      
    });
    alert('Registro completado');
  }

}
