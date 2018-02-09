import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { BaseUrl } from '../base_url';

import { Cate } from '../classes/good';
import { rest } from '../rest.service';

@Injectable()
export class goodService{

  constructor(private rest:rest){}
 
  //所有分类及分类下的展示商品
  public all_cate_good:string = BaseUrl.base + "/index/all_cate_good";
  public sub_cate = BaseUrl.base + "/index/sub_cate";
 
  //请求主页的各分类下所有商品
  public get_index_cate():Promise<Cate[]>{
    let url = this.all_cate_good
    return this.rest.get(url).then((res)=> res.data);
  }
  
  //请求主页侧边栏分类的所有子分类(由于没有真实数据，制作假数据太麻烦，此处不管传入的分类id参数为什么，都返回同样的子分类)
  public get_sub_cate(id:number):Promise<any>{
    let url = this.sub_cate + "?c_id=" + id;
    return this.rest.get(url).then((res)=>res.data);
  }

}