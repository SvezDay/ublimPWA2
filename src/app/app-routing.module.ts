import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_core/auth.guard';

const routes: Routes = [
    // { path: 'box', loadChildren: './box/box.module#BoxPageModule', canActivate: [AuthGuard] },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'box', loadChildren: './box/box.module#BoxPageModule'},
  { path: 'project', loadChildren: './project/project.module#ProjectPageModule' },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' },

  { path: 'popover-profile', loadChildren: './popover-profile/popover-profile.module#PopoverProfilePageModule' },

  // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  // { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  // { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  // { path: 'verify-email', loadChildren: './verify-email/verify-email.module#VerifyEmailPageModule' },

  { path: '**', loadChildren: './tabs/tabs.module#TabsPageModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
