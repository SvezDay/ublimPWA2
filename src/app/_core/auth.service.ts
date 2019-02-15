import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

// import { Storage } from '@ionic/storage';

import * as firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

import { Observable, of, throwError } from 'rxjs';
import { switchMap, catchError, retry } from 'rxjs/operators';

import { User } from '../_interfaces/user';
import { environment } from '../../environments/environment';

import {RestService} from './rest.service';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    apiUrl: string = "http://localhost:5000";
    // apiUrl: string = `https://${environment.firebase.authDomain}`;
    user: Observable<User>;
    firestore;
    isLogged:boolean = false;

    constructor(
        private router: Router
        , private http: HttpClient
        , private rest: RestService
    ) {

    }

    // signin(email: string, password:string) : Promise<firebase.auth.UserCredential>{
    signin(email: string, password:string) : Promise<void>{
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(UserCredential=>{
            return this.getProfile();
        })
    }
    signinWithGoogle(): Promise<void>{
        return this.authLogin(new firebase.auth.GoogleAuthProvider());
    }
    signup(email:string, password:string):Promise<any>{
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((newUserCredential: firebase.auth.UserCredential)=>{
            firebase.firestore().doc(`userProfile/${newUserCredential.user.uid}`).set({email});
        })
    }
    forgotPassword(email:string): Promise<void>{
        return firebase.auth().sendPasswordResetEmail(email);
    }
    logout(): Promise<void>{
        return firebase.auth().signOut();
    }
    getProfile(): Promise<void>{
        return this.rest.query('get', '/rest/getProfile').then(restProfile=>{
            console.log("=================== getProfile ======================")
            console.log("restProfile", restProfile)
        });
    }
    isLoggedin(): Observable<boolean> | Promise<boolean> | boolean{
        console.log("check isLoggedin()")
        return new Promise((resolve, reject)=>{
            firebase.auth().onAuthStateChanged((user: firebase.User)=>{
                if(user) {
                    resolve(true);
                    this.isLogged=true;
                }else{
                    resolve(false);
                    this.isLogged=false;
                }
            })
        })
    }
    private authLogin(provider): Promise<void>{
        return firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log("result ========================================== result");
            this.getProfile();
            // this.ngZone.run(() => {
            //     this.router.navigate(['dashboard']);
            // })
            // this.SetUserData(result.user);

        }).catch((error) => {
            window.alert(error)
        })
    }

    // ngInit(){
    //     this.firestore = this.afs.firestore.settings({timestampsInSnapshots: true});
    // }
    // private handleError(error){
    //     return throwError('Something bad happened; please try again later.');
    // }
    //
    // public isLoggedIn(){
    //     return firebase.auth().onAuthStateChanged(user => {
    //         // console.log("auth service isLogged user:", user);
    //         if(user==null){
    //             return false;
    //         }else{
    //             return true;
    //         }
    //     });
    // }
    //
    // private initUser(){
    //     // // Get Auth Data, then get firestore user document || null
    //     this.user = this.afAuth.authState
    //     .pipe(switchMap(user=>{
    //         if(user) {
    //             console.log("authService initUser user", user.uid)
    //             return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
    //         }else{
    //             console.log("authService initUser null");
    //             return of(null);
    //         }
    //     }))
    //
    //     this.user.subscribe(value=>{
    //         console.log( "initUser value:", value)
    //         this.getCurrentUser();
    //     })
    // }
    //
    // googleLogin(){
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     // Ceci afin de restreindre le scope ne pas créer de nouvel utilisateur
    //     // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //     return this.oAuthLogin(provider);
    // }
    // emailLogin(){
    //     const provider = new firebase.auth.EmailAuthProvider();
    //     return this.oAuthLogin(provider);
    // }
    // private oAuthLogin(provider) {
    //     return this.afAuth.auth.signInWithPopup(provider)
    //     .then(credential => {
    //         console.log("oAuthLogin credential", credential.user)
    //         // this.updateUserData(credential.user);
    //         // this.getCurrentUser();
    //
    //     })
    // }
    // private updateUserData(user){
    //     // Sets user data to firewtore on login
    //     const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    //     const data: User = {
    //         uid: user.uid
    //         ,email: user.email
    //         ,photoURL: user.photoURL
    //         ,displayName: user.displayName
    //     };
    //     return userRef.set(data);
    // }
    // private getCurrentUser() {
    //     this.getToken().then(token=> {
    //         // console.log("=====================================================")
    //         // let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set('x-access-token', token);
    //         let headers = new HttpHeaders({
    //             'Content-Type': 'application/json; charset=utf-8',
    //             'Authorization': JSON.stringify(token) });
    //         this.http.get(`${this.apiUrl}/getCurrentUser`, {headers:headers})
    //         .subscribe(data =>{
    //             console.log('data from registration', data);
    //         }, (err: HttpErrorResponse) => {
    //             if (err.error instanceof Error) {
    //                 console.log('Client-side error occured.');
    //             } else {
    //                 console.log('Server-side error occured.', err);
    //             }
    //         })
    //     })
    // }
    // private getToken(){
    //     // Pour s'assurer que le user est signin
    //     return new Promise((resolve, reject)=>{
    //         firebase.auth().onAuthStateChanged(user => {
    //             if(user){
    //                 user.getIdToken(/*force refresh*/true).then(token=>{
    //                     resolve(token);
    //                 })
    //             }else{
    //                 reject();
    //             }
    //         })
    //     })
    // }
    // // private jwt(...param) {
    // //     // create authorization header with jwt token
    // //     this.afAuth.auth.currentUser.getIdToken(/*force refresh*/true).then(idToken=>{
    // //         // console.log("userService jwt idToken", idToken)
    // //         let headers = new HttpHeaders().set('x-access-token', idToken);
    // //         if(param.length >= 1){
    // //             for(let item in param[0]){
    // //                 headers = headers.set(item, param[0][item]);
    // //             }
    // //         };
    // //         return headers;
    // //     })
    // // };
    //
    // logout() {
    //     this.afAuth.auth.signOut();
    // }


}
