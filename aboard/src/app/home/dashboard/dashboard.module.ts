// Angular Imports
import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';

// This Module's Components
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        DashboardRoutingModule,
        MdCardModule
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
