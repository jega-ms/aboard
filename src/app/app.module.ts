import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { MockBackend } from "@angular/http/testing";
import { MockBackendProvider } from "./mock-backend/mockbackend-provider";
import { BaseRequestOptions, XHRBackend, HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MockBackend,
    MockBackendProvider,
    MockBackend,
    BaseRequestOptions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
