import { Injectable } from '@angular/core'

import { 
  CanActivate, Router, 
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    let url: string = state.url

    return this.checkLogin(url)
  }

  checkLogin(url:string): boolean {
    const token = localStorage.getItem('token')

    if (token) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}