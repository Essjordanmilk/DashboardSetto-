import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { CorrespondenciaModel } from 'src/app/models/CorrespondeciaModel';

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
  
  infocorres:CorrespondenciaModel = {
    idCorrespondencia: 0,
    tipoCorrespondencia: "",
    documentoInqui: 0 ,
 }
 onSubmit(){
    
    this.infocorres.documentoInqui= Number(this.Correspondencia.controls['documentoinqui'].value)
    this.infocorres.tipoCorrespondencia = this.Correspondencia.controls['tipoCorres'].value 
    this.infocorres.idCorrespondencia =  Number(this.Correspondencia.controls['idSolicitud'].value)
    console.log(this.infocorres);
    
    this.service.create("Correspondenciums", this.infocorres ).subscribe(resp =>{
      console.log(resp);
      
    });
    alert('Registro completado'); 
  }


}