import { Injectable } from '@angular/core'

import { LoginComponent } from '../../login/login.component';

@Injectable()
export class AuthService {

  redirectUrl: string

  get isLogin(): boolean {
    return !!localStorage.getItem('token')
  }

  setHasLogin(token: string): void {
    localStorage.setItem('token', token)
  }

  logout(): void {
    localStorage.removeItem('token')
  }
}
