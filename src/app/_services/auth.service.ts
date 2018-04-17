import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDR5n-v-Bw3rU94ORSi366tBnIPqvDQ4CY',
      authDomain: 'auth-example-45771.firebaseapp.com',
      databaseURL: 'https://auth-example-45771.firebaseio.com',
      projectId: 'auth-example-45771',
      storageBucket: 'auth-example-45771.appspot.com',
      messagingSenderId: '186716390637'
    });
  }

  create(email, password): Promise<firebase.User> {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}
