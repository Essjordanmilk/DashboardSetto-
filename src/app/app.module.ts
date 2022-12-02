import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Components/shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field'; 

//componentes
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { InquilinosComponent } from "./Components/inquilinos/inquilinos.component";
import { VisitantesComponent } from './Components/visitantes/visitantes.component';
import { SolicitudesComponent } from './Components/solicitudes/solicitudes.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';
import { LoginComponent } from './Components/login/login.component';
import { CorrespondenciaComponent } from './Components/correspondencia/correspondencia.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { FormularioComponent } from './Form/formulario/formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ModalTemplateComponent } from './Components/modal-template/modal-template.component';
import { FormularioInquiComponent } from './Form/formulario-inqui/formulario-inqui.component';
import { FormularioCorresComponent } from './Form/formulario-corres/formulario-corres.component';
import { FormularioSoliciComponent } from './Form/formulario-solici/formulario-solici.component';
import { FormularioVehiComponent } from './Form/formulario-vehi/formulario-vehi.component';
import { FormularioMainComponent } from './Components/formulario-main/formulario-main.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PruebaComponent } from './Components/prueba/prueba.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    InquilinosComponent,
    VisitantesComponent,
    SolicitudesComponent,
    VehiculosComponent,
    LoginComponent,
    CorrespondenciaComponent,
    FormularioComponent,
    ModalTemplateComponent,
    FormularioInquiComponent,
    FormularioCorresComponent,
    FormularioSoliciComponent,
    FormularioVehiComponent,
    FormularioMainComponent,
    PruebaComponent

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    MatGridListModule, 
    BrowserAnimationsModule, 
    SharedModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatCardModule,
    LayoutModule,
    MatFormFieldModule, 
    MatMenuModule,  
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatRadioModule, 
    ReactiveFormsModule, 
    MatPaginatorModule, 
    MatTableModule, 
    MatFormFieldModule,
    NgxChartsModule,
    NgChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
