import { Component, OnInit } from '@angular/core';
import {userAdresses} from './adress';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.css']
})
export class AdressesComponent implements OnInit {
  usersadresses: any[] = userAdresses;
  constructor() {}

  ngOnInit(): void {
  }

}
