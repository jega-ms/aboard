import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'wizard',
    templateUrl: 'wizard.component.html',
    styleUrls: ['wizard.component.scss']
})
export class WizardComponent {


    constructor(public router:Router){
        
    }
}
