import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GoodRoutingModule } from './good-routing.module'

import { SharedModule } from '../shared/shared.module'

import { IndexComponent } from './index/index.component'
import { GoodDetailComponent } from './good-detail/good-detail.component'

import { CateHover } from './index/cate_hover.directive';
import { GoodPanelComponent } from './index/good-panel/good-panel.component';
import { GoodRowComponent } from './index/good-row/good-row.component'


@NgModule({
  declarations: [
    IndexComponent,
    GoodDetailComponent,
    CateHover,
    GoodPanelComponent,
    GoodRowComponent
  ],
  imports: [
    CommonModule,
    GoodRoutingModule,
    SharedModule
  ]
})
export class GoodModule { }
