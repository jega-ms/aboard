import { Component } from '@angular/core';
import { Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs/Subscription";



@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {

    ngOnInit(): void {
        console.log("ROUT >>......." + this.router.url)
        if (this.router.url === '/') {
            this.router.navigate(['dashboard']);
        }
    }


    isOpen = true;
    public subscription: Subscription;
    constructor(public router: Router, media: ObservableMedia) {
        this.subscription = media.subscribe((change: MediaChange) => {
            console.log("Changes ,..... " + change.mqAlias);
            this.isOpen = (change.mqAlias !== 'xs') && ((change.mqAlias !== 'sm'));
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }


    title = "Home";
    sideMenus = [
        {
            "divider": true,
            "link": "/dashboard",
            "icon": "dashboard",
            "name": "Dashboard"
        },
        {
            "divider": true,
            "link": "/setup",
            "icon": "phonelink_setup",
            "name": "Setup Wizard"
        },
        {
            "divider": true,
            "link": "/emp",
            "icon": "grid_on",
            "name": "Data Grid"
        }
    ];





}
