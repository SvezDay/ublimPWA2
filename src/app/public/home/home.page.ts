import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../_core/auth.service';
// import { PopoverProfilePage } from '../popover-profile/popover-profile.page';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

    constructor(
        private storage: Storage
        , private menu: MenuController
        , private auth: AuthService
        // , private pop: PopoverController
        , private router: Router
    ) {}

    ngOnInit() {
        // Comme indiqué dans app routing, redirect vers board si logged
        this.auth.isLoggedIn().then(res=>{
            console.log("home page isLoggedin(): ", res)
            if(res){
                this.router.navigateByUrl('/members/board');
            }
        })
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
    closeCustom(){
        this.menu.close('custom');
    }
    setData() {
        this.storage.set('data', 'goodby');
    }
    getData() {
        this.storage.get('data').then(data=>{
            console.log(data)
        })
    }
    demo(){
        console.log("Launching demo !");
    }
    // async popoverProfile(ev: Event){
    //     const popover = await this.pop.create({
    //         component: PopoverProfilePage,
    //         event:ev
    //     })
    //     popover.present();
    // }
    logout(){
        this.auth.logout().then(()=>{ this.closeCustom(); })
    }

}
