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
  constructor() {
  }
  
  ngAfterViewInit() {
    // this.signup('boo0330@gmail.com', 'qwerasdfzxcv');
  }
}
