import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../_core/auth.service';
import { PopoverProfilePage } from '../popover-profile/popover-profile.page';

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
        , private pop: PopoverController
    ) {}

    ngOnInit() {
        console.log(this.auth.isLogged);
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
    async popoverProfile(ev: Event){
        const popover = await this.pop.create({
            component: PopoverProfilePage,
            event:ev
        })
        popover.present();
    }
    logout(){
        this.auth.logout().then(()=>{ this.closeCustom(); })
    }

}
