// home.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  password: string;

  constructor() {
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
}
