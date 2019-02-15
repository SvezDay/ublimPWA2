import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/auth.guard';

import { TabsPage } from './tabs.page';
// import { LoginPage } from '../login/login.page';

const routes: Routes = [
  {
    path: 't',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [{ path: '', loadChildren: '../home/home.module#HomePageModule' }]
      },{
        path: 'box',
        children: [{ path: '', loadChildren: '../box/box.module#BoxPageModule' }],
        canActivate: [AuthGuard]
      },{
        path: 'project',
        children: [{ path: '', loadChildren: '../project/project.module#ProjectPageModule' }],
        canActivate: [AuthGuard]
      },{
        path: 'game',
        children: [{ path: '', loadChildren: '../game/game.module#GamePageModule' }],
        canActivate: [AuthGuard]
      },{
        path: 'todo',
        children: [{ path: '', loadChildren: '../user-profile/user-profile.module#UserProfilePageModule' }],
        canActivate: [AuthGuard]
      },{
        path: '**',
        redirectTo: '/t/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginPageModule'
  },
  {
    path: 'sign-up',
    loadChildren: '../sign-up/sign-up.module#SignUpPageModule'
  },
  {
    path: 'forgot-password',
    loadChildren: '../forgot-password/forgot-password.module#ForgotPasswordPageModule' 
  },
  {
    path: '**',
    redirectTo: '/t/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
