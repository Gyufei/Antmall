import { Injectable } from '@angular/core';
import { rest } from '../rest.service'
import { AuthService } from '../service/auth.service'

import { BaseUrl } from '../base_url';

@Injectable()
export class UserService {

  public login_url = BaseUrl.base + '/login'
 
  constructor( private rest: rest, private auth: AuthService) {}

  login(name: string, password: string):Promise<any> {
    const data = {name, password}
    return this.rest.post(this.login_url, data).then(res => {
      this.auth.setHasLogin(res.token)
    })
  }
}
