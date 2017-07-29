// Angular Imports
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdTableModule } from '@angular/material';
import { MdPaginatorModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
// This Module's Components
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee-service.service';

@NgModule({
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        MdCardModule,
        MdInputModule,
        MdTableModule,
        CdkTableModule,
        MdPaginatorModule,
        MdButtonModule,
        MdIconModule
    ],
    declarations: [
        EmployeeComponent,
    ],
    exports: [
        EmployeeComponent,
    ],

    providers: [EmployeeService]

})
export class EmployeeModule {

}
