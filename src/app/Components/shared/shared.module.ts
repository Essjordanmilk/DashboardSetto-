import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//modulos
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

//angular materials

import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatInputModule, 
    HttpClientModule, 
    MatTableModule, 
    MatTooltipModule, 
    MatPaginatorModule, 
    MatFormFieldModule, 
    FormsModule, 
    MatDialogModule
    
  ],
  exports: [
    CommonModule, 
    MatButtonModule,
    MatInputModule,  
    HttpClientModule, 
    MatTableModule, 
    MatTooltipModule, 
    MatPaginatorModule,
    MatFormFieldModule, 
    FormsModule, 
    MatDialogModule
     
  ]
})
export class SharedModule { }
