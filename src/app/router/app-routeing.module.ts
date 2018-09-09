import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from '../login/login.component'
import { IndexComponent } from '../index/index.component';
import { GoodDetailComponent } from '../good-detail/good-detail.component';

import { AuthGuard } from '../common/service/auth-guard.service'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  {
     path: 'index', 
     component: IndexComponent,
     canActivate: [AuthGuard]
  },
  { path: 'good', component: GoodDetailComponent},
  { path: '', component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouteingModule {}