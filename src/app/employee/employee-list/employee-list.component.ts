import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee, EmployeeLoader } from '../employee-loader.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  EmployeeList$: Observable<Employee[]>;

  constructor(loader: EmployeeLoader) {
    this.EmployeeList$ = loader.getList();
  }
}
