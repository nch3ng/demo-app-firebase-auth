import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  constructor(private authService: AuthService) {
  }
  signup(email, password) {
    this.authService.create(email, password).then(
      (user: firebase.User) => {
        console.log(user);
      }
    ).catch(
      (errorCode) => {
        if (errorCode === 'auth/weak-password') {
          console.log('The password is too weak.');
        } else if ('auth/email-already-in-use') {
        } else if ('auth/invalid-email') {
        } else if ('auth/operation-not-allowed') {
        }
        console.log(errorCode);
      }
    );
  }

  ngAfterViewInit() {
    this.signup('boo0330@gmail.com', 'qwerasdfzxcv');
  }
}
