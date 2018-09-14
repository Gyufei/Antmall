import { Injectable } from '@angular/core'

import { AuthService } from '../service/auth.service'

import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url
    return this.checkLogin(url)
  }

  checkLogin(url: string): boolean {
    const isLogin = this.auth.isLogin

    if (isLogin) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
