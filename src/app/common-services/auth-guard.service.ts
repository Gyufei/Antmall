import { Injectable } from '@angular/core'

import { AuthService } from './auth.service'

import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url
    return this.checkLogin(url)
  }

  checkLogin(url: string): boolean {
    const isLogin = this.authService.isLogin

    if (isLogin) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
