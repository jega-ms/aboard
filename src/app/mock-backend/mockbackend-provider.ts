
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
                    let params = new URLSearchParams("&" + url.substring(url.lastIndexOf("?") + 1));
                    let offset = Number(params.get('offset'));
                    let limit = Number(params.get('limit'));

                    console.log("MOCK ...offset " + offset + ",limit=" + limit)

                    if (emplist.length == 0) {
                        for (var i = 1; i < 101; i++) {
                            emplist.push(new Employee(i, "Name " + i, "desc " + i));
                        }
                        let data = JSON.stringify(emplist);
                        localStorage.setItem('emplist', data)
                        console.log("MOCK ====>Creating the data");
                    }

                    let page = emplist.slice(offset,(offset+limit))

                    let count = emplist.length;
                    // let respone=  emplist.copyWithin(index,index+limit)
                    let res = new EmployeeList(page, count);
                    console.log("MOCK ====>MOCK DataCount :" + count + ",page=" + page.length);
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
