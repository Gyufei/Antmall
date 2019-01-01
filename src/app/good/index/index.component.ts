import { Component, OnInit } from '@angular/core';

import { Cate } from '@app/core/model/good';
import { GoodService } from '@app/core/services/good.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  constructor(private goodService: GoodService) { }

  public all_cate_good: Cate[]; // 所有的分类

  ngOnInit() {
    this.get_all_cate();
  }

  public get_all_cate() {
    this.goodService.get_index_cate().subscribe((res) => {
      this.all_cate_good = res;
    })
  }
}
