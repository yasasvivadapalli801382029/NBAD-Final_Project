import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { ReportsComponent } from './reports/reports.component';
import { AppRoutingModule } from './app-routing.module'; // Import routing module

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SummaryComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Add routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
