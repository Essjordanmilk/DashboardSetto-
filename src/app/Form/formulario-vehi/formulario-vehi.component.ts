import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { VehiculoModel } from 'src/app/app/models/VehiculoModel';

@Component({
  selector: 'app-formulario-vehi',
  templateUrl: './formulario-vehi.component.html',
  styleUrls: ['./formulario-vehi.component.css']
})
export class FormularioVehiComponent {

  VehiculoForm: FormGroup;


  constructor(public fb: FormBuilder, public service: ApiService) {
    this.VehiculoForm = this.fb.group({
      'documentoinqui': ['', Validators.required],
      'placa': ['', Validators.required],
      'tip_vehiculo': ['', Validators.required],
      'color': ['', Validators.required],
      'modelo': ['', Validators.required]
    });
  }

  onSubmit() {
    var documentoInqui = this.VehiculoForm.controls['documentoinqui'].value
    var placa = this.VehiculoForm.controls['placa'].value
    var tipoVehi = this.VehiculoForm.controls['tip_vehiculo'].value
    var color = this.VehiculoForm.controls['color'].value
    var model = this.VehiculoForm.controls['modelo'].value

    var informacionvehiculo: VehiculoModel = Object.assign({
      "documentoinqui": documentoInqui,
      "placa": placa,
      "tipoVehiculo": tipoVehi,
      "color": color,
      "modelo": model
    })
    this.service.postAll("Vehiculoes", informacionvehiculo ); 
    alert('Thanks!');
  }

}

