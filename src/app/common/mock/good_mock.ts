/*
* 此服务用于模拟后端产生的数据，在真实后端API完成后即不需要此文件，直接在 rest.service 中统一进行请求管理即可。
*/
import { Good, Cate, SubCate } from '../classes/good';
import { Injectable } from '@angular/core';

@Injectable()
export class Mock{
  
  //产品的起始id
  public start_id = 1;

  //首页显示的商品分类
  public cate_list:string[] = ['平板电脑','马桶','电视','热水器','平衡车','榨汁机','冰箱','空调','手表','电子烟','钱包','西装','皮鞋','睡衣','眼镜','婴儿车']

  private goods_factory(cate_name:string):Cate{
    let goods:Good[] = [];
    
    for(let i=0;i<5;i++){
      this.start_id += 1;
      let price = Number((Math.random()*4000).toFixed(2))
      let good_tmp = new Good(this.start_id,cate_name+i,price,'../../assets/image/首页产品/'+ (this.start_id+10) +'.jpg')
      goods.push(good_tmp);
    }

    let Cate_tmp = new Cate(this.start_id,cate_name,goods);

    return Cate_tmp
  };

  //返回首页商品各分类列表
  public index_cate():Cate[]{
    let index_goods_list:Cate[] = [];
    for(let i=0;i<this.cate_list.length;i++){
      let cate_tmp = this.goods_factory(this.cate_list[i]);
      index_goods_list.push(cate_tmp);
    }

    return index_goods_list;
  }

  //返回各分类的子分类列表
  public subcate(id:number):SubCate{
    let sub_cate_list = [];

    for(let i=0;i<8;i++){
      let rand_num = Math.floor(Math.random()*4+2);
      let tmp_list = [];
      for(let j=0;j<rand_num;tmp_list[j++]="临时分类");
      sub_cate_list.push(tmp_list);
    }

    let sub_cate = new SubCate(id,sub_cate_list);

    return sub_cate;
  }
}
