// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdSidenavModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";

// This Module's Components
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { WizardModule } from './wizard/wizard.module';
import { EmployeeModule } from './employee/employee.module';


@NgModule({
    imports: [
        CommonModule,
        MdSidenavModule,
        MdButtonModule,
        MdToolbarModule,
        MdCardModule,
        MdListModule,
        MdIconModule,
        MdMenuModule,
        
        HomeRoutingModule,
        FlexLayoutModule,
        DashboardModule,
        WizardModule,
        EmployeeModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
    ]
})
export class HomeModule {
    title = "App";


}
