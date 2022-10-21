import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { InquilinosComponent } from './Components/inquilinos/inquilinos.component';
import { CorrespondenciaComponent } from './Components/correspondencia/correspondencia.component';
import { SolicitudesComponent } from './Components/solicitudes/solicitudes.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';
import { VisitantesComponent } from './Components/visitantes/visitantes.component';
import { FormularioComponent } from './Form/formulario/formulario.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inquilinos', component: InquilinosComponent },
  { path: 'correspondecia', component: CorrespondenciaComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'visitantes', component: VisitantesComponent },
  { path: 'formulario', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
