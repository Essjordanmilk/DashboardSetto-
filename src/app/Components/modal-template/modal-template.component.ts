import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent implements OnInit {

  constructor(public modalservice:ModalService) { }
  titulo = ''
  accion = ''
  ngOnInit(): void {
    this.titulo = this.modalservice.titulo
    this.accion = this.modalservice.accion
  }

}
