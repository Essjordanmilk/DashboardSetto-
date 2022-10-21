import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalTemplateComponent } from '../../Components/modal-template/modal-template.component';
import { ApiService } from '../../api.service'
import { ModalService } from 'src/app/service/modal/modal.service';


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css'],
})
export class SolicitudesComponent implements OnInit {

  dataSource:MatTableDataSource<any>;
  displayedColumns: string[];

  
  Solicitudes = 'SOLICITUDES';
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
    constructor(public modalService:ModalService,public service:ApiService, public dialog: MatDialog) { 
      this.dataSource=new MatTableDataSource();
  }
  ngOnInit(): void{
    
    this.get();
    
  }
  public async get(){
    await this.service.getAll("Solicitudes").then((res)=>{
      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]]);
        
      }
      this.dataSource.data=res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    });
  
  }
  
  openDialog() {
    this.modalService.titulo = "solicitud"
    this.modalService.accion = "Agregar nueva"
    this.dialog.open(ModalTemplateComponent, {
      height: 'auto', 
      width: 'auto'
    }); 
  }

  loadTable(data:any[]){
    
    this.displayedColumns=[];
    for(let column in data[0]){
      this.displayedColumns.push(column)
    }
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}