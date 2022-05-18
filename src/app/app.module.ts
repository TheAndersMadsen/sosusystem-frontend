import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CitizenGeneralInfoComponent } from './citizen-general-info/citizen-general-info.component';
import { CitizenHealthConditionsComponent } from './citizen-health-conditions/citizen-health-conditions.component';
import { FooterComponent } from './footer/footer.component';
import { CitizenNavModalComponent } from './citizen-nav-modal/citizen-nav-modal.component';
import { SubcategoryModalComponent } from './subcategory-modal/subcategory-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    DashboardComponent,
    CitizenGeneralInfoComponent,
    CitizenHealthConditionsComponent,
      CitizenHealthConditionsComponent,
      FooterComponent,
      CitizenNavModalComponent,
      SubcategoryModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
      FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
