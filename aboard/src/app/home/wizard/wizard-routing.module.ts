import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './wizard.component';
import { WizardModule } from './wizard.module';



const routes: Routes = [
    { path: '', component: WizardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    providers: []

})
export class WizardRoutingModule { }