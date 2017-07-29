import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {


    constructor(public router: Router) {

    }

    public signin() {
        console.log("Loing ....")
        this.router.navigate(["home"]);
    }
}
