import { Component, OnInit } from '@angular/core';

import { goodService } from '../common/service/good.service';

import { GoodDetail } from '../common/classes/good-detail';

@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.scss']
})
export class GoodDetailComponent implements OnInit {

  public good_detail:GoodDetail; //商品详情
  public img_src_list:any[];
  public big_img_url:string; //当前显示大图的URL

  constructor(private gs:goodService) { }

  ngOnInit() {
    this.get_good_detail(5);
  }

  public sm_img_hover(data):void{
    this.big_img_url = data.big_img_url;
  }

  public get_good_detail(id:number){
    this.gs.get_good_detail(id).then(res => {
      this.good_detail = res;
      this.img_src_list = res.img_src
      this.big_img_url = res.img_src[0].big_img_url;
      console.log(res);
    })
  }

}
