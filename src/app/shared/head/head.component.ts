import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent{
  private isLogin: boolean = false

  constructor(private auth: AuthService) { 
    this.isLogin = this.auth.isLogin
  }
}
