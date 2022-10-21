import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { VisitanteModel } from 'src/app/app/models/VisitanteModel';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']

})
export class FormularioComponent {
  
formularioVisi : FormGroup; 
  

  constructor(public fb: FormBuilder, public service:ApiService) {
    this.formularioVisi = this.fb.group({
      'documentoinqui': ['', Validators.required], 
      'nombreVisitante': ['', Validators.required],
      'detallesVisitante': ['', Validators.required],
      'documentoVisitante': ['', Validators.required],
      'fecha': ['', Validators.required],
      'hora': ['', Validators.required],
      'torre': ['',Validators.required], 
      'apartamento': ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(5)])
      ]
    });
  }

  onSubmit() {
    var DocumentoInqui = this.formularioVisi.controls['documentoinqui'].value
    var nombreVisitante = this.formularioVisi.controls['nombreVisitante'].value
    var detalles = this.formularioVisi.controls['detallesVisitante'].value
    var documentovisi = this.formularioVisi.controls['documentoVisitante'].value
    var fecha = this.formularioVisi.controls['fecha'].value
    var hora = this.formularioVisi.controls['hora'].value
    var torre = this.formularioVisi.controls['torre'].value
    var apartamento = this.formularioVisi.controls['apartamento'].value


    var informacionInqui: VisitanteModel = Object.assign({
      "documentoinqui": DocumentoInqui,
      "nombreVisitante": nombreVisitante,
      "documentoVisi": documentovisi,
      "hora": hora,
      "fecha": fecha,
      "detallesVisi": detalles,
      "torre": torre,
      "apartamento": apartamento,
    })
    this.service.postAll("Visitantes", informacionInqui ); 
    alert('Thanks!');
  }

}
