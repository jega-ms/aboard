// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

// This Module's Components
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { WizardModule } from './wizard/wizard.module';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        DashboardModule,
        WizardModule
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
