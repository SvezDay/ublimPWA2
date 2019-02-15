import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { User } from '../_interfaces/user';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router){  }
    // canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    //     if(this.auth.isLoggedIn()) {
    //         return true;
    //     }else{
    //         this.router.navigate(['/login']);
    //         return false;
    //     }
    // }
    canActivate(next: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return new Promise((resolve, reject)=>{
            firebase.auth().onAuthStateChanged((user: firebase.User)=>{
                    if(user) {
                        resolve(true);
                    }else{
                        this.router.navigate(['/login']);
                        resolve(false);
                    }
            })
        })
    }
}
