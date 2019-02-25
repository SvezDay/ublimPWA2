import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_core/auth.guard';

const routes: Routes = [
    // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},

    // { path: 'board', loadChildren: './board/board.module#BoardPageModule', canActivate: [AuthGuard] },
    // { path: 'box', loadChildren: './box/box.module#BoxPageModule', canActivate: [AuthGuard] },
    // { path: 'project', loadChildren: './project/project.module#ProjectPageModule', canActivate: [AuthGuard] },
    // { path: 'game', loadChildren: './game/game.module#GamePageModule', canActivate: [AuthGuard] },
    //
    // { path: 'user-profile', loadChildren: './user-profile/user-profile.module#UserProfilePageModule', canActivate: [AuthGuard] },
    //
    // { path: 'popover-profile', loadChildren: './popover-profile/popover-profile.module#PopoverProfilePageModule' },
    //
    // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    // { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
    // { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
    // { path: 'verify-email', loadChildren: './verify-email/verify-email.module#VerifyEmailPageModule' },

    { path: 'public', loadChildren: './public/public-routing.module#PublicRoutingModule' },
    // { path: 'members', loadChildren: './members/members.module#MembersPageModule', canActivate: [AuthGuard] },
    { path: 'members', loadChildren: './members/members.module#MembersPageModule'},

    // in the home constructor, if logged redirect to board
    { path: '', loadChildren: './public/public-routing.module#PublicRoutingModule' },
    { path: '**', loadChildren: './public/public-routing.module#PublicRoutingModule' },
  // { path: 'toolbar', loadChildren: './members/toolbar/toolbar.module#ToolbarPageModule' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
