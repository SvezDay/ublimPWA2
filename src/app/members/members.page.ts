import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss', '../app.component.scss'],
})
export class MembersPage implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log("check members page")
  }

}
