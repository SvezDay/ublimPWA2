import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import * as firebase from 'firebase/app'
import 'firebase/firestore';

import { Observable, of, throwError } from 'rxjs';
import { switchMap, catchError, retry, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { User } from '../_interfaces/user';
import { Data } from '../_interfaces/data';

// import {AuthService} from './auth.service';
// import {IntercomService} from './intercom.service';


@Injectable()
export class RestService {
    apiUrl: string = "http://localhost:5000";
    // apiUrl: string = `https://${environment.firebase.authDomain}/api`;

    constructor( private http: HttpClient/*, private auth: AuthService*/){ }

    private handleError(error: any, caught:Observable<any>):Observable<any>{
        console.log('error', error);
        return error;
    }
    private getToken(){
        // Pour s'assurer que le user est signin
        return new Promise((resolve, reject)=>{
            firebase.auth().onAuthStateChanged(user => {
                if(user){
                    console.log("user=====================", user.getIdToken())
                    // resolve(user.refreshToken);
                    resolve(user.getIdToken())
                }else{
                    resolve(null);
                }
            })
            // let user = firebase.auth().currentUser;
            // if(user){
            //     console.log("user profile user", user)
            //     resolve(user.getIdToken())
            // }else{
            //     resolve("null")
            // }
            // firebase.firestore().doc(`userProfile/${newUserCredential.user.uid}`).set({email});
        })
    }
    private getHeader(...param){
        return new Promise((resolve, reject)=>{
            // let headers;
            this.getToken()
            .then(token=>{
                // console.log('getHeader ============================================ ', JSON.stringify(token))
                // return new HttpHeaders({
                let head = new HttpHeaders({
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': JSON.stringify(token) });
                // return {headers: head};
                return head;
            }).then(headers=>{
                // console.log("secodn headers check ", headers)
                if(param.length >= 1){
                    for(let item in param[0]){
                        headers = headers.set(item, param[0][item]);
                    }
                };
                return headers;
            }).then(headers=>{
                console.log("resolve getHeader: ", headers)
                resolve({headers: headers});
            }).catch(e=>{
                reject(e);
            })
        })
    }
    query(verb, route, ...param){
        if(verb == 'get' || verb == 'delete'){
            return this.getHeader(...param).then(h=>{
                return this.http.request(verb, ""+this.apiUrl + route+"", h)
                .toPromise()
                .then(data=>{
                    return data;
                })
                .catch(e=>{ console.log("e e e e !"+ e); })
            })
        }else{
            return this.getHeader(...param).then(h=>{
                return this.http[verb](`${this.apiUrl}${route}`, param[0] || {}, h)
                .pipe(
                    tap( response => {
                        console.log("rest service response bis", response)
                        // this.auth.storeSession(response);
                        // return response;
                    }),
                    catchError((e: any, caught: Observable<any>) => {
                        return throwError( this.handleError(e, caught) )
                    })
                );
            });
        }
    };


    // private jwt(...param) {
    //     // create authorization header with jwt token
    //     this.afAuth.auth.currentUser.getIdToken(/*force refresh*/true).then(idToken=>{
    //         // console.log("userService jwt idToken", idToken)
    //         let headers = new HttpHeaders().set('x-access-token', idToken);
    //         if(param.length >= 1){
    //             for(let item in param[0]){
    //                 headers = headers.set(item, param[0][item]);
    //             }
    //         };
    //         return headers;
    //     })
    // };

};
