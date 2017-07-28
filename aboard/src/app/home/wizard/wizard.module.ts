// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { WizardComponent } from './wizard.component';
import { WizardRoutingModule } from './wizard-routing.module';
import { MdCardModule } from '@angular/material';

@NgModule({
    imports: [
        WizardRoutingModule,
        MdCardModule
    ],
    declarations: [
        WizardComponent,

    ],
    exports: [
        WizardComponent,
    ]
})
export class WizardModule {

}
