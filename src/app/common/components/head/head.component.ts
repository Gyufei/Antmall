import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../service/auth.service'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  private isLogin = false

  constructor(private auth: AuthService) { 
    this.isLogin = this.auth.isLogin
  }

  ngOnInit() {
  }

}
