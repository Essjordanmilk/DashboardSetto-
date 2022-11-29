import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalTemplateComponent } from '../../Components/modal-template/modal-template.component';
import { ApiService } from '../../api.service';
import { ModalService } from 'src/app/service/modal/modal.service';
import { SolicitudesModel } from 'src/app/models/SolicitudesModel';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css'],
})
export class SolicitudesComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  Solicitudes = 'SOLICITUDES';
  Acciones = 'acciones';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public modalService: ModalService,
    public service: ApiService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog() {
    this.modalService.titulo = 'solicitud';
    this.modalService.accion.next('Crear Solicitud');
    this.dialog.open(ModalTemplateComponent, {
      height: 'auto',
      width: 'auto',
    });
  }

  ngOnInit(): void {
    this.get();
  }
  public async get() {
    await this.service.getAll('Solicitudes').then((res) => {
      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]]);
      }
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }



  loadTable(data: any[]) {
    this.displayedColumns = [];
    for (let column in data[0]) {
      this.displayedColumns.push(column);
    }
    this.displayedColumns.push('Acciones');
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editarRegistro(element: any) {
    this.modalService.accion.next('Editar Solicitud');
    this.modalService.solicitudes = element;
    this.dialog.open(ModalTemplateComponent, {
      height: 'auto',
      width: 'auto'
    });
  }

  deleteRegis(element: SolicitudesModel) {
    const id = element.documentoinqui;
    console.log(id);

    this.service.delete('Solicitudes', String(id)).subscribe((resp) => {
      console.log(resp);
    });
  }
}
