import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  public AllEmployees = []
  public error:string

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
     this._employeeService.getEmployees().subscribe(data=>{
       this.AllEmployees = data
     },(error)=>{
       this.error = error
     })
  }

}
