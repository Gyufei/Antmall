import { Component, OnInit } from '@angular/core';

import { Cate } from '@app/core/model/good';

@Component({
  selector: 'app-carousel-head-bar',
  templateUrl: './carousel-head-bar.component.html',
  styleUrls: ['./carousel-head-bar.component.scss']
})
export class CarouselHeadBarComponent implements OnInit {
  public commend_cate: string[] = ['日用百货', '家居家电']  // 轮播顶部推荐分类

  constructor() { }

  ngOnInit() {
  }

}
