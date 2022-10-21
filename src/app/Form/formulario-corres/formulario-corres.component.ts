import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { CorrespondenciaModel } from 'src/app/app/models/CorrespondeciaModel';

@Component({
  selector: 'app-formulario-corres',
  templateUrl: './formulario-corres.component.html',
  styleUrls: ['./formulario-corres.component.css']
})
export class FormularioCorresComponent {

  Correspondencia: FormGroup; 

  constructor(public fb: FormBuilder, public service:ApiService) {
      this.Correspondencia = this.fb.group({
        'documentoinqui': ['', Validators.required], 
        'tipoCorres': ['', Validators.required], 
        'idSolicitud': ['', Validators.required],
      });
  }

  onSubmit(){
    
    var documentoinquilino = this.Correspondencia.controls['documentoinqui'].value
    var tipoCorrespondencia = this.Correspondencia.controls['tipoCorres'].value 
    var idSolicitud = this.Correspondencia.controls['idSolicitud'].value

    var informacionCorres: CorrespondenciaModel = Object.assign({
    "documentoInqui" : documentoinquilino,
    "tipoCorrespondencia" : tipoCorrespondencia,
    "idCorrespondencia" : idSolicitud
  })
    this.service.postAll("Correspondenciums", informacionCorres ); 
    alert("Registro completado"); 
  }

  
}