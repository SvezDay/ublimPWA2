// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './_core/auth.guard';
//
// const routes: Routes = [
//     { path: 'public', loadChildren: './public/public.module#PublicPageModule'},
//     { path: 'members', loadChildren: './members/members.module#MembersPageModule', canActivate:[AuthGuard]},
//
//     // in the home constructor, if logged redirect to board
//     { path: '', loadChildren: './public/public.module#PublicPageModule'},
//     { path: '**', loadChildren: './public/public.module#PublicPageModule' },
// ];
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}
