import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { VisitanteModel } from 'src/app/models/VisitanteModel';


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

  infoInqui:VisitanteModel = {
    documentoinqui: 0,
    nombreVisi: "",
    documentoVisi: 0,
    hora: "",
    fecha: "",
    detallesVisi: "",
    torre: 0,
    apartamento: 0,
  }

  onSubmit() {
    this.infoInqui.documentoinqui = Number(this.formularioVisi.controls['documentoinqui'].value)
    this.infoInqui.nombreVisi = this.formularioVisi.controls['nombreVisitante'].value
    this.infoInqui.detallesVisi = this.formularioVisi.controls['detallesVisitante'].value
    this.infoInqui.documentoVisi = Number(this.formularioVisi.controls['documentoVisitante'].value)
    this.infoInqui.fecha = this.formularioVisi.controls['fecha'].value
    this.infoInqui.hora = this.formularioVisi.controls['hora'].value
    this.infoInqui.torre = Number(this.formularioVisi.controls['torre'].value)
    this.infoInqui.apartamento = Number(this.formularioVisi.controls['apartamento'].value)
    console.log(this.infoInqui);

    
    this.service.create("Visitantes", this.infoInqui ); 
    alert('Registro completado');
  }

}
