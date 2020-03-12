import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Employee } from '../models/employee.model'
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  gender: any = 'male';
  isActive = true;
  selectedDepartment: string = '';
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto : boolean = false;
  //dateOfBirth: Date = new Date(2018, 0, 30);
  //department = 2;

  departments: Array<Department> = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];

  employee: Employee;

  constructor(private _employeeService: EmployeeService, private _router: Router) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        // showWeekNumbers: true,
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit() {
  }

  // saveEmployee(empForm: NgForm){
  //   console.log("Employee Form Value : ", empForm.value);
  //   //console.log("Employee Form Value : ", empForm)
  // }

  saveEmployee(){
    this._employeeService.save(this.employee);
    console.log('this.employee : ', this.employee);
    this._router.navigate(['list'])
  }
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  showValuePromptText(dept:any, event: any){
    console.log('Select Departement : ', dept);
    this.selectedDepartment = dept.id
  }

}
