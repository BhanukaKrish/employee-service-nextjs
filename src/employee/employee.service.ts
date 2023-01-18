import { Employee, EmployeeTier } from './Employee.model';
import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [];

  getAllEmployees() {
    return this.employees;
  }

  createEmployee(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    tier: EmployeeTier,
    status: string,
  ) {
    const employee = {
      id: uuid(),
      firstName,
      lastName,
      email,
      phone,
      tier,
      status,
    };
    this.employees.push(employee);
    return employee;
  }
}
