import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { EmployeeService } from "./employee-service.service";
import { EmployeeList } from "./employee-list";
import { Observable } from "rxjs/Observable";
import { DataSource } from '@angular/cdk';
import { Employee } from "./employee";
import { MdPaginator, MdSnackBar } from "@angular/material";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
    moduleId: module.id,
    selector: 'employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.scss'],
    providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
    emp: EmployeeList = new EmployeeList([], 0);
    displayedColumns = ['id', 'name', 'desc'];
    dataSource: ExampleDataSource | null;

    @ViewChild(MdPaginator) paginator: MdPaginator;

    /**
     * 
     * @param router 
     * @param service 
     */
    constructor(public router: Router, public snackBar: MdSnackBar, public service: EmployeeService) {
    }
    /**
     * 
     */
    ngOnInit(): void {
        this.dataSource = new ExampleDataSource(this.service, this.paginator);
        console.log("Serice Fetch ......");
    }


    openSnackBar(message: string, action: string) {
        console.log("Snack bar .....");
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}

export class ExampleDataSource extends DataSource<any> {

    constructor(public _service: EmployeeService, private paginator: MdPaginator) {
        super();
    }

    /**
     * 
     */
    connect(): Observable<Employee[]> {
        return this._service.findAll(this.paginator.pageIndex, this.paginator.pageSize).map(e => {
            this.paginator.length = e.count;
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;

            console.log("Employee findAll(): Count=" + e.count + ",Offset=" + this.paginator.pageIndex
                + ",Limit=" + this.paginator.pageSize + ",startIndex=" + startIndex);

            return e.items.splice(startIndex, this.paginator.pageSize);
        });
    }

    /**
     * 
     */
    disconnect() { }
}