import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../_core/auth.service';
import { RestService } from '../_core/rest.service';
import { Page } from '../_interfaces/box';

@Component({
    selector: 'app-box',
    templateUrl: './box.page.html',
    styleUrls: ['./box.page.scss'],
})
export class BoxPage implements OnInit {
    page: Page;
    @ViewChild('ion-menu') menu: MenuController
    // constructor(private menu: MenuController, private auth: AuthService, private api: ApiService) { }
    constructor(private auth: AuthService, private rest: RestService) { }

    ngOnInit() {
        this.getPage();
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
    // logout(){
    //     console.log("fn logout")
    //     this.auth.logout();
    // }
    private getPage(){
        console.log('check in getPage')
        let params = {};
        this.rest.query("get", "/rest/box/getPage")
        // .subscribe(data=>{
        //     // this.page = data;
        //     console.log("page", this.page)
        // })
        .then(data=>{
            console.log("data from boxpage: ", data);
        })
    }

}
