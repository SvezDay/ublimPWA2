import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes = [
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
    { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
    { path: 'verify-email', loadChildren: './verify-email/verify-email.module#VerifyEmailPageModule' }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
