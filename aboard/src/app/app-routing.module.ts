
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: '**', redirectTo: 'admin' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true }),
        LoginModule,
        HomeModule
    ],
    exports: [RouterModule],
    providers: [HomeModule,LoginModule]

})
export class AppRoutingModule { }