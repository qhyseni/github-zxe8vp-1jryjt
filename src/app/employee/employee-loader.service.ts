import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  hoursWorked: number;
  hourlyWage: number;
}

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root',
})
export class EmployeeLoader {
  constructor(private http: HttpClient) {}

  getList(): Observable<Employee[]> {
    // TODO:
    // Write code that returns employees observable from server.
    // Pagination: 9
    // path: apiUrl + '/employees'
    return of([]);
  }

  getDetails(employeeId: string): Observable<Employee> {
    // TODO:
    // Write code that returns employee observable by ID from server.
    // path: `${apiUrl}/employees/${employeeId}`
    return of({
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      hoursWorked: 0,
      hourlyWage: 0,
    });
  }
}
