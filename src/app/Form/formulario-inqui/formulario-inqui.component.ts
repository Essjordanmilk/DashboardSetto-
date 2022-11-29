import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { InquilinosModel } from 'src/app/models/InquilinosModel';
import { ModalService } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-formulario-inqui',
  templateUrl: './formulario-inqui.component.html',
  styleUrls: ['./formulario-inqui.component.css'],
})
export class FormularioInquiComponent implements OnInit {
  inquilinosForm = this.fb.group({
    documentoinqui: ['', Validators.required],
    nombreInqui: ['', Validators.required],
    edad: ['', Validators.required],
    apartamento: ['', Validators.required],
    torre: ['', Validators.required],
    vehiculo: ['', Validators.required],
  });

  inquilino: InquilinosModel = {
    nombre: '',
    documentoInqui: 0,
    edad: 0,
    torre: 0,
    apartamento: 0,
    vehiculo: '',
  };

  controller = 'Inquilinoes';

  constructor(
    private fb: FormBuilder,
    public service: ApiService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    if (this.modalService.accion.value == 'Editar Inquilino') {
      //console.log(this.modalService.inquilino);

      this.inquilinosForm.controls['documentoinqui'].setValue(
        this.modalService.inquilino.documentoInqui + ''
      );
      this.inquilinosForm.controls['nombreInqui'].setValue(
        this.modalService.inquilino.nombre + ''
      );
      this.inquilinosForm.controls['edad'].setValue(
        this.modalService.inquilino.edad + ''
      );
      this.inquilinosForm.controls['apartamento'].setValue(
        this.modalService.inquilino.apartamento + ''
      );
      this.inquilinosForm.controls['torre'].setValue(
        this.modalService.inquilino.torre + ''
      );
      this.inquilinosForm.controls['vehiculo'].setValue(
        this.modalService.inquilino.vehiculo + ''
      );
    }
  }
  onSubmit(data: any) {
    if (this.modalService.accion.value == 'Crear Inquilino') {
      this.inquilino.documentoInqui = Number(data.documentoinqui);
      this.inquilino.nombre = data.nombreInqui;
      this.inquilino.edad = Number(data.edad);
      this.inquilino.apartamento = Number(data.apartamento);
      this.inquilino.torre = Number(data.torre);
      this.inquilino.vehiculo = data.vehiculo;
      console.log(data);

      this.service.create(this.controller, this.inquilino).subscribe((resp) => {
        console.log(resp);
      });
    } else {
      this.inquilino.documentoInqui = Number(data.documentoinqui);
      this.inquilino.nombre = data.nombreInqui;
      this.inquilino.edad = Number(data.edad);
      this.inquilino.apartamento = Number(data.apartamento);
      this.inquilino.torre = Number(data.torre);
      this.inquilino.vehiculo = data.vehiculo;

      this.service
        .update(this.controller, data.documentoinqui, this.inquilino)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }
}
