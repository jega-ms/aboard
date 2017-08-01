import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges, Directive, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { MdSort } from '@angular/material';
import { EmployeeService } from "./employee-service.service";
import { EmployeeList } from "./employee-list";
import { Observable } from "rxjs/Observable";
import { DataSource, CollectionViewer } from '@angular/cdk';
import { Employee } from "./employee";
import { MdPaginator, MdSnackBar } from "@angular/material";
import { MdDialog, MdDialogRef } from '@angular/material';
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
export class EmployeeComponent implements OnInit, AfterViewInit {

    displayedColumns = ['id', 'name', 'desc'];
    dataSource: EmployeeDataSource | null;

    @ViewChild('paginator') paginator: MdPaginator | null;
    @ViewChild('filter') filter: ElementRef | null;
    @ViewChild(MdSort) sort: MdSort | null;

    ngAfterViewInit(): void {
        console.log("Employee:ngAfterViewInit()" + JSON.stringify(this.sort));

        console.log("Employee:ngAfterViewInit() done");
    }





    /**
     * 
     * @param router 
     * @param service 
     */
    constructor(public dialog: MdDialog, public router: Router, public snackBar: MdSnackBar, public service: EmployeeService) {
    }

    /**
     * 
     */
    ngOnInit(): void {
        console.log("Employee:ngOnInit()");
        this.dataSource = new EmployeeDataSource(this.service, this.paginator, this.sort);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) { return; }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
        console.log("Serice Fetch ......");
    }




    openSnackBar(message: string, action: string) {
        console.log("Snack bar .....");
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}

// @Component({
//     selector: 'add-emp-details',



export class EmployeeDataSource extends DataSource<Employee> {

    resultLength: number = 0;
    isLoadingResults: boolean;
    isRateLimitReached: boolean;
    _filterChange = new BehaviorSubject('');
    get filter(): string { return this._filterChange.value; }
    set filter(filter: string) { this._filterChange.next(filter); }

    constructor(public _service: EmployeeService, private _paginator: MdPaginator, private _sort: MdSort) {
        super();
    }


    connect(collectionViewer: CollectionViewer): Observable<Employee[]> {
        const displayDataChanges = [
            this._paginator.page,
            this._filterChange,
            // this._sort.mdSortChange,
        ];

        return Observable.merge(...displayDataChanges).startWith(null)
            .switchMap(() => {
                this.isLoadingResults = true;
                if (this._paginator != null) {
                    const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
                    return this._service.findAll(startIndex, this._paginator.pageSize);
                }
                return this._service.findAll(0, 100);


            })
            .catch(excption => {
                this.isRateLimitReached = true;
                return Observable.of(null);
            })
            .map(result => {
                // Flip flag to show that loading has finished.
                this.resultLength = result.count;
                let data = result.items.slice().filter((item: Employee) => {
                    let searchStr = (item.name).toLowerCase();
                    return searchStr.indexOf(this.filter.toLowerCase()) != -1;
                });
                // if (!this._sort.active || this._sort.direction == '') {
                    return data;
                // } else {
                //     return data.sort((a, b) => {
                //         let propertyA: number | string = '';
                //         let propertyB: number | string = '';

                //         switch (this._sort.active) {
                //             case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
                //             case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
                //             case 'desc': [propertyA, propertyB] = [a.progress, b.progress]; break;
                //         }

                //         let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
                //         let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

                //         return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
                //     });
                // }
            });


    }
    disconnect(collectionViewer: CollectionViewer): void {
    }
}