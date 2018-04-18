import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../_services/auth.service';
import { UserModel } from '../../_models/user.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorMsg: String;
  user: UserModel;
  constructor(private _authService: AuthService) {
    this.errorMsg = '';
    this.user = new UserModel();
  }

  ngOnInit() {
  }

  onSignup() {
    this._authService.create(this.user.email, this.user.password).then(
      (user: firebase.User) => {
        console.log(user);

      }
    ).catch(
      (errorCode) => {
        if (errorCode['code'] === 'auth/weak-password') {
          this.errorMsg = 'The password is too weak.';
        } else if (errorCode['code'] === 'auth/email-already-in-use') {
          this.errorMsg = 'The email is already registered.';
        } else if (errorCode['code'] === 'auth/invalid-email') {
          this.errorMsg = 'The email is invalid.';
        } else if (errorCode['code'] === 'auth/operation-not-allowed') {
          this.errorMsg = 'Oops, Something wrong!';
        }
        // this.errorMsg = errorCode['message'];
        console.log(errorCode);
      }
    );
  }
}
