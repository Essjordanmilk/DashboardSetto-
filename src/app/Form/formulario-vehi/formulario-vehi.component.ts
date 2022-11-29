import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { VehiculoModel } from 'src/app/models/VehiculoModel';
import { ModalService } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-formulario-vehi',
  templateUrl: './formulario-vehi.component.html',
  styleUrls: ['./formulario-vehi.component.css']
})
export class FormularioVehiComponent implements OnInit{
  VehiculoForm = this.fb.group({
    documentoinqui: ['', Validators.required],
    placa: ['', Validators.required],
    tip_vehiculo: ['', Validators.required],
    color: ['', Validators.required],
    modelo: ['', Validators.required]
  });

  infoVehiculo:VehiculoModel = {
    documentoinqui: 0,
    placa: '',
    tipoVehiculo: '',
    color: '',
    modelo: '',
  };


  controller = 'Vehiculoes';

  constructor(
    private fb: FormBuilder,
    public service: ApiService,
    public modalService: ModalService
  ) {}
  ngOnInit(): void {
    if (this.modalService.accion.value == 'Editar Registro') {
      this.VehiculoForm.controls['documentoinqui'].setValue(
        this.modalService.vehiculo.documentoinqui + ''
      );
      this.VehiculoForm.controls['placa'].setValue(
        this.modalService.vehiculo.placa + ''
      );
      this.VehiculoForm.controls['tip_vehiculo'].setValue(
        this.modalService.vehiculo.tipoVehiculo + ''
      );
      this.VehiculoForm.controls['color'].setValue(
        this.modalService.vehiculo.color + ''
      );
      this.VehiculoForm.controls['modelo'].setValue(
        this.modalService.vehiculo.modelo + ''
      );

    }
  }
  onSubmit(data: any) {
    if (this.modalService.accion.value == 'Registrar Vehiculo') {
      this.infoVehiculo.documentoinqui = Number(data.documentoinqui);
      this.infoVehiculo.placa = data.placa;
      this.infoVehiculo.tipoVehiculo = data.tip_vehiculo;
      this.infoVehiculo.color = data.color;
      this.infoVehiculo.modelo = data.modelo;
      console.log(data);

      this.service
        .create(this.controller, this.infoVehiculo)
        .subscribe((resp) => {
          console.log(resp);
        });
    } else {
      this.infoVehiculo.documentoinqui = Number(data.documentoinqui);
      this.infoVehiculo.placa = data.placa;
      this.infoVehiculo.tipoVehiculo = data.tip_vehiculo;
      this.infoVehiculo.color = data.color;
      this.infoVehiculo.modelo = data.modelo;

      this.service
        .update(this.controller, data.documentoinqui, this.infoVehiculo)
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }

}

