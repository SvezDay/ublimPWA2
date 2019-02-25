import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { PopoverProfilePage } from '../popover-profile/popover-profile.page';
import { AuthService } from '../../_core/auth.service';
// import { ToolbarPage} from '../toolbar/toolbar.page';

@Component({
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss', '../../app.component.scss']
  // ,providers: [PopoverProfilePageModule]
})
export class BoardPage implements OnInit {

  constructor(private auth: AuthService, private popoverCtrl: PopoverController) { }

  ngOnInit() {
      console.log('check board')
  }
  isLogged(): Promise<boolean>{
      return this.auth.isLoggedIn();
  }
  async popoverProfile(ev: Event){
      console.log("check popoverProfile() ev: ", ev)
      const popover = await this.popoverCtrl.create({
          component: PopoverProfilePage,
          event:ev
      });
      popover.present();
  }
}
