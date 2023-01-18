import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }

  @Post()
  createEmployee(@Body() request) {
    return this.employeeService.createEmployee(
      request.firstName,
      request.lastName,
      request.email,
      request.phone,
      request.tier,
      request.status,
    );
  }
}
