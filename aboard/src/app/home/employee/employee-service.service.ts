import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { EmployeeList } from "./employee-list";
import { Http } from "@angular/http";
import { Employee } from "./employee";

@Injectable()
export class EmployeeService {

  constructor(public http: Http) { }

  /**
   * 
   * @param offset 
   * @param limit 
   */
  findAll(offset: number = 0, limit: number = 20): Observable<EmployeeList> {
    return this.http.get("employee?offset=" + offset + "&limit=" + limit)
      .map(response => response.json());
  }

}
