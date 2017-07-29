// Angular Imports
import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

// This Module's Components
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MdCardModule,
        MdButtonModule

    ],
    declarations: [
        DashboardComponent,
    ],
    exports: [
        DashboardComponent,
    ]
})
export class DashboardModule {

}
