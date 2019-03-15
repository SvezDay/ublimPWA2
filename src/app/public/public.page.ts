import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../_core/auth.service';
import { RestService } from '../_core/rest.service';

@Component({
    selector: 'app-public',
    templateUrl: './public.page.html',
    styleUrls: ['./public.page.scss'],
})
export class PublicPage implements OnInit {
    public loading: HTMLIonLoadingElement;

    constructor(
        private router: Router
        , private authService: AuthService
        , private loadingController: LoadingController
        , private alertController: AlertController
        , private restService: RestService
    ) { }

    async ngOnInit() {
        this.loading = await this.loadingController.create({
            spinner: 'lines',
            duration: 2000,
            message: 'Please wait...',
            translucent: true,
            cssClass: 'custom-class custom-loading'
        });
        // await this.loading.present();
        this.loading.present();
        this.authService.isLoggedIn().then(res=>{
            if(res){
                this.restService.get('/user/getProfile', {}).then( async (res) => {
                    console.log("check res", res);
                    // Store profile in cache front

                    this.loading.dismiss().then(() => {
                        console.log("home page isLoggedin(): ", res)
                        this.router.navigateByUrl('/members/board');
                    });

                })
            }



        })
        // setTimeout(()=>{
        //
        // }, 5000)
    }

}
