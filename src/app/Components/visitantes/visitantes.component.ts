import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalTemplateComponent } from '../../Components/modal-template/modal-template.component';
import { ApiService } from '../../api.service'
import { ModalService } from 'src/app/service/modal/modal.service';
import { VisitanteModel } from 'src/app/models/VisitanteModel';

@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.component.html',
  styleUrls: ['./visitantes.component.css'],
})
export class VisitantesComponent implements OnInit {

  dataSource:MatTableDataSource<any>;
  displayedColumns: string[];
  

  Visitantes = 'VISITANTES';
  Acciones = "acciones"; 

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    constructor(public modalService:ModalService, private service:ApiService, public dialog: MatDialog) { 
      this.dataSource=new MatTableDataSource();
  }
  ngOnInit(): void{
    
    this.get();
    
  }
  public async get(){
    await this.service.getAll("Visitantes").then((res)=>{
      for (let index = 0; index < res.length; index++) {
        this.loadTable([res[index]]);
        
      }
      this.dataSource.data=res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    });
  
  }
  
  openDialog() {
    this.modalService.accion.next('Crear Visitante');
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
    this.modalService.accion.next('Editar Visitante');
    this.modalService.visitante = element;
    this.dialog.open(ModalTemplateComponent, {
      height: 'auto', 
      width: 'auto'
    });
  }


  deleteRegis(element:VisitanteModel){ 
    const id = element.documentoinqui;
    console.log(id);
    
    this.service.delete("Visitantes", String(id)).subscribe(resp => { 
      console.log(resp);
      
    })
  }

}