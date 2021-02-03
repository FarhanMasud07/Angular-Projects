import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public AllEmployees = [];
  public error: string;

  @Input() public AllState: any; // from parent to child
  @Output() public childEvent = new EventEmitter(); // from child to parent

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data=>{
      this.AllEmployees = data
    },(error)=>{
      console.log(error)
      this.error = error
    });
  }
  fireEvent(): void {
    this.childEvent.emit('This is from child event');
  }

}
