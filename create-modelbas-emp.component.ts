import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employees/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-modelbas-emp',
  templateUrl: './create-modelbas-emp.component.html',
  styleUrls: ['./create-modelbas-emp.component.css']
})
export class CreateModelbasEmpComponent implements OnInit {

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

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null,
    password:null,
    confirmPassword:null 
  }

  constructor(private _employeeservice: EmployeeService, private _router: Router) {
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

  saveEmployee(empForm){
    console.log("Employee Form Value : ", empForm);
    this._employeeservice.save(empForm);
    this._router.navigate(['list'])

    //console.log("Employee Form Value : ", empForm)
  }
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  showValuePromptText(dept:any, event: any){
    console.log('Select Departement : ', dept);    
  }

}
