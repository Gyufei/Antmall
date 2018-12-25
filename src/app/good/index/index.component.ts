import { Component, OnInit } from '@angular/core';

import { GoodService } from '../../common-services/good.service';
import { Cate } from '../../common/models/good';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  public all_cate_good: Cate[]; // 所有的分类
  public commend_cate: Cate[];  // 轮播顶部推荐分类
  public sub_cate  // 轮播侧边栏分类的子分类
  public hover_cate_id: number // 轮播侧边栏保持hover效果的分类id

  constructor(private gs: GoodService) {  }

  ngOnInit() {
    this.get_all_cate();
  }

  // 获取首页所有分类商品
  public get_all_cate() {
    this.gs.get_index_cate().subscribe((res) => {
      this.all_cate_good = res;
      this.commend_cate = res.slice(1, 3)
    })
  }

  public get_sub_cate(id: number) {
    this.gs.get_sub_cate(id).subscribe((res) => {
      this.sub_cate = res;
    })
  }

  // 鼠标移动到菜单分类上时显示详情菜单
  public cate_enter(id: number): void{
    this.get_sub_cate(id)
    this.hover_cate_id = id;
  }
  // 鼠标离开菜单分类
  public cate_leave(id: number): void{
    this.hover_cate_id = null;
    setTimeout(() => {
      if (this.hover_cate_id == null) {
        this.sub_cate = null;
      }
    })
  }

  // 鼠标点击菜单分类
  public cate_click(id: number): void{
  }

  // 鼠标进入子菜单时 主菜单保持 hover 效果
  public sub_cate_enter(id: number): void{
    this.hover_cate_id = id;
  }

  public sub_cate_leave(id: number): void{
    this.hover_cate_id = null;
    this.sub_cate = null;
  }

  // 单个商品的点击事件
  public good_click(good):void{
    console.log(good);
  }

}
