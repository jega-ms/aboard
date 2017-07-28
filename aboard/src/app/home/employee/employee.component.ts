import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.scss']
})
export class EmployeeComponent {

    constructor(public router: Router) {

    }
}
