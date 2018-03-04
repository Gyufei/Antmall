import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { BaseUrl } from '../base_url';

import { Cate } from '../classes/good';
import { rest } from '../rest.service';

@Injectable()
export class goodService{

  constructor(private rest:rest){}
 
  //主页所有分类及分类下的展示商品
  public all_cate_good_url:string = BaseUrl.base + "/all_cate_good";
  //侧边栏分类Hover时显示的子分类
  public sub_cate_url = BaseUrl.base + "/sub_cate";
  //获取商品详情
  public good_detail_url = BaseUrl.base + "/good_detail"
 

  //获取主页的各分类下所有商品
  public get_index_cate():Promise<Cate[]>{
    let url = this.all_cate_good_url;
    return this.rest.get(url).then((res)=> res.data);
  }
  
  //获取主页侧边栏分类的所有子分类
  public get_sub_cate(id:number):Promise<any>{
    let url = `${this.sub_cate_url}?c_id=${id}`;
    return this.rest.get(url).then((res)=>res.data);
  }
  
  //获取商品详情
  public get_good_detail(id:number):Promise<any>{
    let url = `${this.good_detail_url}?g_id=${id}`;
    return this.rest.get(url).then((res)=>res.data);
  }

}