import { Injectable } from '@angular/core';
import { Rest } from './rest.service'
import { AuthService } from './auth.service'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private rest: Rest, private auth: AuthService) { }

  login(name: string, password: string): Observable<any> {
    const data = { name, password }
    const loginPath = '/login'
    return this.rest.post(loginPath, JSON.stringify(data))
      .pipe(map((res: any) => this.auth.setHasLogin(res.token)))
  }
}