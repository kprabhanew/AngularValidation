import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from  '@angular/forms';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateModelbasEmpComponent } from './employees/create-modelbas-emp.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive'
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';

import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';

const appRoutes: Routes = [
  {path:"list", component: ListEmployeesComponent},
  {path:"create", component: CreateEmployeesComponent},
  {path: "createEmpModel", component: CreateModelbasEmpComponent},
  {path:"",redirectTo:"/list",pathMatch:"full"}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    CreateModelbasEmpComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
