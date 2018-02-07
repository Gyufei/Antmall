/* 在后端API服务完成后，可将此文件中的各数据请求方法替换为HTTP请求
 * （即可将此处的各个不同请求修改为相应的通用请求方法，如GET，POST）
 *  通过 URL 的不同确定不同的请求内容。
 *  现在使用的是假数据，因此只能根据请求不同调用不同函数。 
 */

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Cate, SubCate } from '../classes/good'; 
import { Mock } from '../mock/good_mock';

@Injectable()
export class rest{

  constructor(private mock:Mock){}
  
  
  public get_index_goods():Promise<Cate[]>{
    let res = this.mock.index_cate()
    return Promise.resolve(res);
  }
  
  
  public get_side_cate(id:number):Promise<SubCate>{
    console.log('will_get_cate_id: '+id);
    let res =  this.mock.subcate(id);
    return Promise.resolve(res);
  }

}