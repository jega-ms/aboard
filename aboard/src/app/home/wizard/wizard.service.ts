import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class EmployeeService {


    constructor(private http: Http) {

    }


    // getVideos() : Employee[] {
    //     return this.http.get('.${this.apiUrl}/videos')
    //         .map(res => res.json().data);
    // }

}


export class Employee {
    id: string;
    name: string;
    designation: string;
}
