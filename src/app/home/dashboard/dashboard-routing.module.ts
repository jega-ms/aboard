import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardModule } from './dashboard.module';



const routes: Routes = [
    { path: '', component: DashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    providers: []

})
export class DashboardRoutingModule { }