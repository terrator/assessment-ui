import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [
    {
      profile_id: 1000000,
      first: "Juan",
      last: "Terrazas",
      account_no: 888888888
    },
    {
      profile_id: 1000001,
      first: "Mark",
      last: "Timmins",
      account_no: 999999999
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
