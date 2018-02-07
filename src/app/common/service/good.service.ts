import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Cate } from '../classes/good';
import { rest } from '../service/rest.service';

@Injectable()
export class goodService{

  constructor(private rest:rest){}
 
  //请求主页的各分类下所有商品
  public get_index_cate():Promise<Cate[]>{
    return this.rest.get_index_goods().then((res)=> res);
  }
  
  //请求主页侧边栏分类的所有子分类(由于没有真实数据，制作假数据太麻烦，此处不管传入的分类id参数为什么，都返回同样的子分类)
  public get_side_cate(id:number){
    return this.rest.get_side_cate(id).then((res)=>res);
  }

}