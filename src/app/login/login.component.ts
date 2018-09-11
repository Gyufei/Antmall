import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 

import { UserService } from '../common/service/user.service'
import { AuthService } from '../common/service/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private user: UserService, 
    private router:　Router
    ) {}

  ngOnInit() {
    if (this.auth.isLogin) {
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
