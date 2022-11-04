import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { VehiculoModel } from 'src/app/models/VehiculoModel';

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

  infoVehiculo:VehiculoModel = {
    documentoinqui: 0,
    placa: "",
    tipoVehiculo: "",
    color: "",
    modelo: "",
  }
  onSubmit() {
    this.infoVehiculo.documentoinqui = Number(this.VehiculoForm.controls['documentoinqui'].value)
    this.infoVehiculo.placa = this.VehiculoForm.controls['placa'].value
    this.infoVehiculo.tipoVehiculo = this.VehiculoForm.controls['tip_vehiculo'].value
    this.infoVehiculo.color = this.VehiculoForm.controls['color'].value
    this.infoVehiculo.modelo = this.VehiculoForm.controls['modelo'].value


    this.service.create("Vehiculoes", this.infoVehiculo ).subscribe(resp=>{
      console.log(resp);
      
    });
    alert('Registro completado');
  }

}

