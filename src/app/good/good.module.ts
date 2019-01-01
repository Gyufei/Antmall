import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GoodRoutingModule } from './good-routing.module'

import { SharedModule } from '../shared/shared.module'

import { IndexComponent } from './index/index.component'
import { GoodDetailComponent } from './good-detail/good-detail.component'

import { CateHover } from './index/cate_hover.directive';
import { GoodPanelComponent } from './index/good-row/good-panel/good-panel.component';
import { GoodRowComponent } from './index/good-row/good-row.component';
import { CarouselComponent } from './index/carousel/carousel.component';
import { CarouselHeadBarComponent } from './index/carousel/carousel-head-bar/carousel-head-bar.component';
import { CarouselSideCateComponent } from './index/carousel/carousel-side-cate/carousel-side-cate.component'


@NgModule({
  declarations: [
    IndexComponent,
    GoodDetailComponent,
    CateHover,
    GoodPanelComponent,
    GoodRowComponent,
    CarouselComponent,
    CarouselHeadBarComponent,
    CarouselSideCateComponent
  ],
  imports: [
    CommonModule,
    GoodRoutingModule,
    SharedModule
  ]
})
export class GoodModule { }
