import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { InquilinosModel } from 'src/app/app/models/inquilinosModel';

@Component({
  selector: 'app-formulario-inqui',
  templateUrl: './formulario-inqui.component.html',
  styleUrls: ['./formulario-inqui.component.css']
})
export class FormularioInquiComponent {

  inquilinosForm:FormGroup; 

  constructor(public fb: FormBuilder, public service:ApiService) {
    this.inquilinosForm = this.fb.group({
      'documentoinqui': ['', Validators.required], 
      'nombreInqui': ['', Validators.required],
      'edad': ['', Validators.required],
      'apartamento': ['', Validators.required],
      'torre': ['',Validators.required],
      'vehiculo': ['', Validators.required]
    });
  }

  onSubmit() {
    var documentoinqui = this.inquilinosForm.controls['documentoinqui'].value
    var nombreInqui = this.inquilinosForm.controls['nombreInqui'].value
    var edad = this.inquilinosForm.controls['edad'].value
    var apartamento = this.inquilinosForm.controls['apartamento'].value
    var torre = this.inquilinosForm.controls['torre'].value
    var vehiculo = this.inquilinosForm.controls['vehiculo'].value
    console.log(vehiculo)
    var informacionInqui: InquilinosModel = Object.assign({
      "nombre": nombreInqui,
      "documentoInqui": documentoinqui, 
      "edad": edad,
      "torre": torre, 
      "apartamento": apartamento,
      "vehiculo": vehiculo
    })
    this.service.postAll("Inquilinoes", informacionInqui ); 
    alert('Thanks!');
  }



}
