
import { Injectable } from "@angular/core";
import { Employee } from "../home/employee/employee";
import { EmployeeList } from "../home/employee/employee-list";

import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';


export let MockBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: MockBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};



export function MockBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    let emplist: Employee[] = JSON.parse(localStorage.getItem('emplist')) || [];
    console.log('Configuring Mock Http backend...');
    backend.connections.subscribe(
        (connection: MockConnection) => {

            // wrap in timeout to simulate server api call
            setTimeout(() => {
                let method = connection.request.method;
                let url = connection.request.url;
                console.log("MOCK ====> URL =" + url + ", Method =" + method + ",options=" + options.params);

                //findAll
                if (method === RequestMethod.Get && url.match('employee')) {
                    //&& connection.request.url.match('/employee')
                    let index=0;
                    let size = 5;
                    if (emplist.length == 0) {
                        for (var i = 0; i < 100; i++) {
                            emplist.push(new Employee("Id-" + i, "Name-" + i, "desc-" + i));
                        }
                        let data = JSON.stringify(emplist);
                        localStorage.setItem('emplist', data)
                        console.log("MOCK ====>Creating the data");
                    }


                    let count = emplist.length;

                    let res = new EmployeeList(emplist, count);
                    console.log("MOCK ====>MOCK DataCount :" + count);
                    connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(res).slice() })));
                    return;
                } else {
                    console.log("MOCK ====> Not Matched");
                }

            }, 500);

        }



    );
    return new Http(backend, options);
}

function desk() {

}
