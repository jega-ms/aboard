import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WizardComponent } from './wizard/wizard.component';
import { EmployeeModule } from './employee/employee.module';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'setup', loadChildren: './wizard/wizard.module#WizardModule' },
            { path: 'emp', loadChildren: './employee/employee.module#EmployeeModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class HomeRoutingModule { }