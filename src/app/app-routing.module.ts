import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginScreenComponent } from 'src/app/login-screen/login-screen.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { HireEmployeeComponent } from './hire-employee/hire-employee.component';

const routes: Routes = [
  {path: '', component: LoginScreenComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'hireemployee', component: HireEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
