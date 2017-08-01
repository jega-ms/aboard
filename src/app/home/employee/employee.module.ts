// Angular Imports
import { NgModule, Directive } from '@angular/core';
import { CdkTableModule } from '@angular/cdk';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdTableModule } from '@angular/material';
import { MdPaginatorModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdDatepickerModule } from '@angular/material';
import { MdSortModule } from '@angular/material';
import { CommonModule } from '@angular/common';
// This Module's Components
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './employee-service.service';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        EmployeeRoutingModule,
        MdCardModule,
        MdInputModule,
        MdTableModule,
        CdkTableModule,
        MdPaginatorModule,
        MdButtonModule,
        MdIconModule,
        MdToolbarModule,
        MdDialogModule,
        MdDatepickerModule,
    ],
    declarations: [
        EmployeeComponent,
    ],
    entryComponents: [
    ],
    exports: [
        EmployeeComponent,
    ],
    providers: [EmployeeService],
})
export class EmployeeModule {

}
