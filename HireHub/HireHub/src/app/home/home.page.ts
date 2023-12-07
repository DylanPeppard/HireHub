// home.page.ts

import { Component } from '@angular/core';
import { FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { SocialAuthService } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  password: string;
  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService) {
    this.username = '';
    this.password = '';
  }

  createAccount() {
    console.log('Creating account:', this.username, this.password);
    this.username = '';
    this.password = '';
  }

  signIn() {
    this.username = '';
    this.password = '';}

    signInWithFacebook() {
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
}
