import { Component, OnInit } from '@angular/core';

import { goodService } from '../service/good.service';
import { Cate } from '../classes/good';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public all_cate_good:Cate[];

  constructor(private gs:goodService) {  }

  ngOnInit() {
    this.get_all_cate();
  }

  //获取首页所有分类商品
  public get_all_cate(){
    this.gs.get_index_cate().then((res)=>{
      console.log(res);
      this.all_cate_good = res;
    })
  }

  //鼠标移动到菜单分类上时显示详情菜单
  public cate_enter(cate){
    console.log(cate)
  }
  //鼠标离开菜单分类
  public cate_level(cate){
    console.log(cate)
  }
  //鼠标点击菜单分类
  public cate_click(cate){
    console.log(cate)
  }
  
  //单个商品的点击事件
  public good_click(good){
    console.log(good);
  }

}
