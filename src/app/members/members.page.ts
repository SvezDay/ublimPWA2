import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_core/auth.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss', '../app.component.scss'],
})
export class MembersPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
      console.log("check members page")
  }
  logout(){
      this.auth.logout();
  }

}
