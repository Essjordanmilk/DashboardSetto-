import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalTemplateComponent } from '../../Components/modal-template/modal-template.component';
import { ModalService } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-formulario-main',
  templateUrl: './formulario-main.component.html',
  styleUrls: ['./formulario-main.component.css']
})
export class FormularioMainComponent implements OnInit {
  dialog: any;
  

  constructor(public modalService:ModalService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.modalService.titulo = "correspondencia"
    this.modalService.accion.next("crearcorrespondencia");
    this.dialog.open(ModalTemplateComponent, {
      height: 'auto', 
      width: 'auto'
    }); 
  }
}
