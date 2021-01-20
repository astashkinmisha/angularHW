import { Component, OnInit } from '@angular/core';
import {userAdresses} from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = userAdresses;
  constructor() { }

  ngOnInit(): void {
  }

}
