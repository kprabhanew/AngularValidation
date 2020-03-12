import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/mark.png',
            password: 'abc',
            confirmPassword: 'abc',
          },
          {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            dateOfBirth: new Date('11/20/1979'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/mary.png',
            password: 'abc',
            confirmPassword: 'abc',
          },
          {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 5432978640,
            dateOfBirth: new Date('3/25/1976'),
            department: '4',
            isActive: false,
            photoPath: 'assets/images/john.png',
            password: 'abc',
            confirmPassword: 'abc',
          }
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }
    save(item: Employee): void{
      this.listEmployees.push(item);

    }
}
