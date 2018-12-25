import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisteredComponent } from './registered/registered.component';

const userRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registered',
    component: RegisteredComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
