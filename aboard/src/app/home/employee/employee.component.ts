import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { EmployeeService } from "./employee-service.service";
import { EmployeeList } from "./employee-list";
import { Observable } from "rxjs/Observable";
import { DataSource, CollectionViewer } from '@angular/cdk';
import { Employee } from "./employee";
import { MdPaginator, MdSnackBar } from "@angular/material";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
    moduleId: module.id,
    selector: 'employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.scss'],
    providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
    displayedColumns = ['id', 'name', 'desc'];
    dataSource: ExampleDataSource | null;

    @ViewChild(MdPaginator) paginator: MdPaginator;

    @ViewChild('filter') filter: ElementRef;

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
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) { return; }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }


    openSnackBar(message: string, action: string) {
        console.log("Snack bar .....");
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}

export class ExampleDataSource extends DataSource<Employee> {

    resultLength: number = 0;
    isLoadingResults: boolean;
    isRateLimitReached: boolean;
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }

    constructor(public _service: EmployeeService, private _paginator: MdPaginator) {
        super();
    }


    connect(collectionViewer: CollectionViewer): Observable<Employee[]> {
        const displayDataChanges = [
            this._paginator.page,
            this._filterChange,
        ];

        return Observable.merge(...displayDataChanges).startWith(null)
            .switchMap(() => {
                this.isLoadingResults = true;
                const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
                return this._service.findAll(startIndex, this._paginator.pageSize);
            })
            .catch(excption => {
                this.isRateLimitReached = true;
                return Observable.of(null);
            })
            .map(result => {
                // Flip flag to show that loading has finished.
                this.resultLength = result.count;
                return result.items.slice().filter((item: Employee) => {
                    let searchStr = (item.name).toLowerCase();
                    return searchStr.indexOf(this.filter.toLowerCase()) != -1;
                });;
            });
    }
    disconnect(collectionViewer: CollectionViewer): void {
    }
}