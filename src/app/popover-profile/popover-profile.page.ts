import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-profile',
  templateUrl: './popover-profile.page.html',
  styleUrls: ['./popover-profile.page.scss'],
})
export class PopoverProfilePage implements OnInit {

  constructor(private pop: PopoverController) { }

  ngOnInit() {
  }
  closePopover(){
      this.pop.dismiss();
  }

}
