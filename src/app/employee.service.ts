import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';
import {IEmployee} from './iemployee'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = '/assets/data/data.json'

  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler))
                    
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || 'Server Error')
  }
}
