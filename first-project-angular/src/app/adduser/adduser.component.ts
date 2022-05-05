import { Component, OnInit } from '@angular/core';
import { user } from '../decoupling/decopling-interface';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users: user[] = [
    {
      email: 'foo@example.com',
      password: '123',
      address: '123 tehran'
    },
    {
      email: 'foto@yahoo.com',
      password: '345',
      address: '797 tajar'
    },
    {
      email: 'zahra@gmail.com',
      password: '119',
      address: '911 fardis'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public onAddUser (email: string, password: string,address: string, e: Event) {
    e.preventDefault();
    let u : user = {
      email: email,
      password: password,
      address: address
    };
    this.users.push(u)
  }
}
