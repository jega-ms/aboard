// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MdCardModule } from '@angular/material';
import { MdInputModule, MdButtonModule } from '@angular/material';

// This Module's Components
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        MdCardModule,
        FlexLayoutModule,
        MdInputModule,
        MdButtonModule,
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {

}
