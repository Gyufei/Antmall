import { Injectable } from '@angular/core';
import { Rest } from '../rest.service'
import { AuthService } from '../service/auth.service'

import { BaseUrl } from '../base_url';

import { Observable } from 'rxjs/observable'
import { map } from 'rxjs/operators'

@Injectable()
export class UserService {

  public login_url = BaseUrl.base + '/login'

  constructor( private rest: Rest, private auth: AuthService) {}

  login(name: string, password: string): Observable<any> {
    const data = {name, password}
    return this.rest.post(this.login_url, JSON.stringify(data))
    .pipe(map((res: any) => this.auth.setHasLogin(res.token)))
  }
}
