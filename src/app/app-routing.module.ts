import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {CitizenGeneralInfoComponent} from "./citizen-general-info/citizen-general-info.component";
import {CitizenHealthConditionsComponent} from "./citizen-health-conditions/citizen-health-conditions.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'citizen-general-info', component: CitizenGeneralInfoComponent},
  { path: 'citizen-health-conditions', component: CitizenHealthConditionsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
