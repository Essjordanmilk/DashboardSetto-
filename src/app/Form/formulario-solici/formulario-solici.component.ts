import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { SolicitudesModel } from 'src/app/models/SolicitudesModel';
import { ModalService } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-formulario-solici',
  templateUrl: './formulario-solici.component.html',
  styleUrls: ['./formulario-solici.component.css'],
})
export class FormularioSoliciComponent implements OnInit {
  solicitudForm = this.fb.group({
    idSolicitud: ['', Validators.required],
    documentoinqui: ['', Validators.required],
    tipSolicitud: ['', Validators.required],
    fecha: ['', Validators.required],
    hora: ['', Validators.required],
    estado: ['', Validators.required],
    idModificaciones: ['', Validators.required],
  });

  infoInquilino: SolicitudesModel = {
    idSolicitud: 0,
    documentoinqui: 0,
    tipoSoli: '',
    horaSoli: '',
    fechaSoli: '',
    estado: '',
    idModificaciones: 0,
  };
  controller = 'Solicitudes';

  constructor(
    private fb: FormBuilder,
    public service: ApiService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    if (this.modalService.accion.value == 'Editar Solicitud') {
      this.solicitudForm.controls['idSolicitud'].setValue(
        this.modalService.solicitudes.idSolicitud + ''
      );
      this.solicitudForm.controls['documentoinqui'].setValue(
        this.modalService.solicitudes.documentoinqui + ''
      );
      this.solicitudForm.controls['tipSolicitud'].setValue(
        this.modalService.solicitudes.tipoSoli + ''
      );
      this.solicitudForm.controls['fecha'].setValue(
        this.modalService.solicitudes.fechaSoli + ''
      );
      this.solicitudForm.controls['hora'].setValue(
        this.modalService.solicitudes.horaSoli + ''
      );
      this.solicitudForm.controls['estado'].setValue(
        this.modalService.solicitudes.estado + ''
      );
      this.solicitudForm.controls['idModificaciones'].setValue(
        this.modalService.solicitudes.idModificaciones + ''
      );
    }
  }
  onSubmit(data: any) {
    if (this.modalService.accion.value == 'Crear Solicitud') {
      this.infoInquilino.idSolicitud = Number(data.idSolicitud);
      this.infoInquilino.documentoinqui = Number(data.documentoinqui);
      this.infoInquilino.tipoSoli = data.tipSolicitud;
      this.infoInquilino.fechaSoli = data.fecha;
      this.infoInquilino.horaSoli = data.hora;
      this.infoInquilino.estado = data.esttado;
      this.infoInquilino.idModificaciones = Number(data.idModificaciones);
      console.log(data);

      this.service
        .create(this.controller, this.infoInquilino)
        .subscribe((resp) => {
          console.log(resp);
        });
    } else {
      this.infoInquilino.idSolicitud = Number(data.idSolicitud);
      this.infoInquilino.documentoinqui = Number(data.documentoinqui);
      this.infoInquilino.tipoSoli = data.tipSolicitud;
      this.infoInquilino.fechaSoli = data.fecha;
      this.infoInquilino.horaSoli = data.hora;
      this.infoInquilino.estado = data.esttado;
      this.infoInquilino.idModificaciones = Number(data.idModificaciones);

      this.service
        .update(this.controller, data.documentoinqui, this.infoInquilino)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }
}
