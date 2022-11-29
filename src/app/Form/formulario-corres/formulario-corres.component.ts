import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { CorrespondenciaModel } from 'src/app/models/CorrespondeciaModel';
import { ModalService } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-formulario-corres',
  templateUrl: './formulario-corres.component.html',
  styleUrls: ['./formulario-corres.component.css']
})
export class FormularioCorresComponent {
  
      Correspondencia = this.fb.group({
        documentoinqui: ['', Validators.required], 
        tipoCorres: ['', Validators.required], 
        idSolicitud: ['', Validators.required],
      });

  infocorres:CorrespondenciaModel = {
    idCorrespondencia: 0,
    tipoCorrespondencia: "",
    documentoInqui: 0 ,
 };

  controller = 'Correspondenciums';  
  constructor(
    private fb: FormBuilder,
    public service: ApiService,
    public modalService: ModalService
  ) {}

   ngOnInit(): void {
    if (this.modalService.accion.value == 'Editar Correspondencia') {

      this.Correspondencia.controls['documentoinqui'].setValue(
        this.modalService.correspondencia.documentoInqui + ''
      );
      this.Correspondencia.controls['tipoCorres'].setValue(
        this.modalService.correspondencia.tipoCorrespondencia + ''
      );
      this.Correspondencia.controls['idSolicitud'].setValue(
        this.modalService.correspondencia.idCorrespondencia + ''
      );
    }
  }
  onSubmit(data: any) {
    if (this.modalService.accion.value == 'Asignar Correspondencia') {
      this.infocorres.documentoInqui = Number(data.documentoinqui);
      this.infocorres.tipoCorrespondencia = data.tipoCorres;
      this.infocorres.idCorrespondencia = Number(data.idSolicitud);
      console.log(data);

      this.service
        .create(this.controller, this.infocorres)
        .subscribe((resp) => {
          console.log(resp);
        });
    } else {
      this.infocorres.documentoInqui = Number(data.documentoinqui);
      this.infocorres.tipoCorrespondencia = data.tipoCorres;
      this.infocorres.idCorrespondencia = Number(data.idSolicitud);

      this.service
        .update(this.controller, data.documentoinqui, this.infocorres)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }
}