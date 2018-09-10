import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 

import { UserService } from '../common/service/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private user: UserService, private router:　Router) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/index'])
    }
  }

  private login(name: string, password: string):void {
    if (!name || !password) return
    this.user.login(name, password).then(() => {
      this.router.navigate(['/index'], { replaceUrl: true})
    })
  }

}
