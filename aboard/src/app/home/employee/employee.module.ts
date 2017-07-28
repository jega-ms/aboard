// Angular Imports
import { NgModule } from '@angular/core';
import { MdCardModule,MdInputModule } from '@angular/material';

// This Module's Components
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
    imports: [
        EmployeeRoutingModule,
        MdCardModule,
        MdInputModule
    ],
    declarations: [
        EmployeeComponent,
    ],
    exports: [
        EmployeeComponent,
    ]
})
export class EmployeeModule {

}
