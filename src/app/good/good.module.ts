import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GoodRoutingModule } from './good-routing.module'

import { CommonComponentsModule } from '../common-components/common-components.module'

import { IndexComponent } from './index/index.component'
import { GoodDetailComponent } from './good-detail/good-detail.component'

@NgModule({
  declarations: [
    IndexComponent,
    GoodDetailComponent
  ],
  imports: [
    CommonModule,
    GoodRoutingModule,
    CommonComponentsModule
  ]
})
export class GoodModule { }
