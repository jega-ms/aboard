import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeModule } from './employee.module';



const routes: Routes = [
    { path: '', component: EmployeeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    providers: []

})
export class EmployeeRoutingModule { }