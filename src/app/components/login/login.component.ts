import { Component, OnInit } from '@angular/core';
import {User} from "../../users/user";

@Component({
  selector: 'sosu-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  users: User[];
  constructor() {
    this.users = [
      {username: 'Niko', password: '123'},
      {username: 'Svend', password: '123'},
      {username: 'Anders', password: '123'},
      {username: 'Simon', password: '123'}
    ]
  }

  login(user) {
    console.log('user', user);
  }
  ngOnInit(): void {
  }
}
