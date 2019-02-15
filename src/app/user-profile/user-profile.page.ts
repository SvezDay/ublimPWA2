import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_core/auth.service';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss']
})
export class UserProfilePage implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  doSomething() {
    console.log(this.auth.user)
  }

}
