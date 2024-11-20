import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }, // Default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '**', component: LoginComponent } // Redirect invalid routes to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
