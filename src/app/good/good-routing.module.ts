import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/services/guard/auth-guard.service'

import { IndexComponent } from './index/index.component';
import { GoodDetailComponent } from './good-detail/good-detail.component';

const goodRoutes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'good',
    component: GoodDetailComponent,
    canActivate: [AuthGuard]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(goodRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GoodRoutingModule { }
