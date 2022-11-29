import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { VisitanteModel } from 'src/app/models/VisitanteModel';
import { ModalService } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formularioVisi = this.fb.group({
    documentoinqui: ['', Validators.required],
    nombreVisitante: ['', Validators.required],
    detallesVisitante: ['', Validators.required],
    documentoVisitante: ['', Validators.required],
    fecha: ['', Validators.required],
    hora: ['', Validators.required],
    torre: ['', Validators.required],
    apartamento: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
  });
  infoInqui: VisitanteModel = {
    documentoinqui: 0,
    nombreVisi: '',
    documentoVisi: 0,
    hora: '',
    fecha: '',
    detallesVisi: '',
    torre: 0,
    apartamento: 0,
  };
  controller = 'Visitantes';

  constructor(
    public fb: FormBuilder, 
    public service: ApiService, 
    public modalService: ModalService
    ) {}
  ngOnInit(): void {
  if (this.modalService.accion.value == 'Editar Visitante') {
      this.formularioVisi.controls['documentoinqui'].setValue(
        this.modalService.visitante.documentoinqui + ''
      );
      this.formularioVisi.controls['nombreVisitante'].setValue(
        this.modalService.visitante.nombreVisi + ''
      );
      this.formularioVisi.controls['detallesVisitante'].setValue(
        this.modalService.visitante.detallesVisi + ''
      );
      this.formularioVisi.controls['documentoVisitante'].setValue(
        this.modalService.visitante.documentoVisi + ''
      );
      this.formularioVisi.controls['fecha'].setValue(
        this.modalService.visitante.fecha + ''
      );
      this.formularioVisi.controls['hora'].setValue(
        this.modalService.visitante.hora + ''
      );
      this.formularioVisi.controls['torre'].setValue(
        this.modalService.visitante.torre + ''
      )
      this.formularioVisi.controls['apartamento'].setValue(
        this.modalService.visitante.apartamento + ''
      )
    }
  }
  onSubmit(data: any) {
    if (this.modalService.accion.value == 'Crear Visitante') {
      this.infoInqui.documentoinqui = Number(data.documentoinqui);
      this.infoInqui.nombreVisi = data.nombreVisitante;
      this.infoInqui.detallesVisi = data.detallesVisitante;
      this.infoInqui.documentoVisi = Number(data.documentoVisitante);
      this.infoInqui.fecha = data.fecha;
      this.infoInqui.hora = data.hora;
      this.infoInqui.torre = Number(data.torre);
      this.infoInqui.apartamento = Number(data.apartamento);
      console.log(data);

      this.service.create(this.controller, this.infoInqui).subscribe((resp) => {
        console.log(resp);
      });
    } else {
      this.infoInqui.documentoinqui = Number(data.documentoinqui);
      this.infoInqui.nombreVisi = data.nombreVisitante;
      this.infoInqui.detallesVisi = data.detallesVisitante;
      this.infoInqui.documentoVisi = Number(data.documentoVisitante);
      this.infoInqui.fecha = data.fecha;
      this.infoInqui.hora = data.hora;
      this.infoInqui.torre = Number(data.torre);
      this.infoInqui.apartamento = Number(data.apartamento);

      this.service
        .update(this.controller, data.documentoinqui, this.infoInqui)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }
}