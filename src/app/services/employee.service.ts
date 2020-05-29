import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1/employee';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<GetResponseEmployees>(this.baseUrl)
    .pipe(
      map(response => response._embedded.employee
      )
    );
  }

}

interface GetResponseEmployees {
  _embedded: {
    employee: Employee[];
  };
}
