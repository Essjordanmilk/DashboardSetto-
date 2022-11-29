import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalTemplateComponent } from '../../Components/modal-template/modal-template.component';
import { ApiService } from '../../api.service'
import { ModalService } from 'src/app/service/modal/modal.service';
import { VehiculoModel } from 'src/app/models/VehiculoModel';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  dataSource:MatTableDataSource<any>;
  displayedColumns: string[];
  Vehiculos = 'VEHICULOS';
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
    this.modalService.titulo = 'vehiculo';
    this.modalService.accion.next('Registrar Vehiculo');
    this.dialog.open(ModalTemplateComponent, {
      height: 'auto', 
      width: 'auto'
    }); 
  }

  ngOnInit(): void{
    this.get();
  }
  public async get(){
    await this.service.getAll('Vehiculoes').then((res)=>{
      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]]);
        
      }
      this.dataSource.data=res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    });
  
  }



  loadTable(data:any[]){
    
    this.displayedColumns=[];
    for(let column in data[0]){
      this.displayedColumns.push(column)
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
    this.modalService.accion.next('Editar Registro');
    this.modalService.vehiculo = element;
    this.dialog.open(ModalTemplateComponent, {
      height: 'auto', 
      width: 'auto'
    });
  }

  deleteRegis(element: VehiculoModel) {
    const id = element.documentoinqui;
    console.log(id);

    this.service.delete('Vehiculoes', String(id)).subscribe((resp) => {
      console.log(resp);
    });
  }
  
}