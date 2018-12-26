import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'

import { Cate } from '../model/good';
import { Rest } from './rest.service';

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpParamsOptions } from '@angular/common/http/src/params';

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  constructor(private rest: Rest) { }

  // 获取主页的各分类下所有商品
  public get_index_cate(): Observable<Cate[]> {
    const path = '/all_cate_good'
    return this.rest.get(path)
      .pipe(map((res: any) => res.data))
  }

  // 获取主页侧边栏分类的所有子分类
  public get_sub_cate(id: number): Observable<any> {
    const path = '/sub_cate'
    const params: HttpParams = new HttpParams({ 'c_id': id } as HttpParamsOptions)
    return this.rest.get(path, params)
      .pipe(map((res: any) => res.data))
  }

  // 获取商品详情
  public get_good_detail(id: number): Observable<any> {
    const path = '/good_detail'
    const params: HttpParams = new HttpParams({ 'g_id': id } as HttpParamsOptions)
    return this.rest.get(path, params)
      .pipe(map((res: any) => res.data))
  }
}
