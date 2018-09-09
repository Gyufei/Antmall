/* 
 * 目前使用 EASYMOCK 网站提供的在线 MOCK 服务进行后端的数据请求 API 模拟。
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class rest{

  constructor(private http:Http){}
  
  //通用的 get 请求方法
  public get(url):Promise<any>{
    console.log(url);
    return this.http.get(url).toPromise()
               .then(response=>this.extractData(response))
               .catch(this.handleError);
  }

  public post(url, data:Object):Promise<any>{
    console.log(url);
    return this.http.post(url, data).toPromise()
               .then(response => this.extractData(response))
               .catch(this.handleError)
  }

  //请求时的错误处理函数
  public handleError(error:any){
    let errMsg = (error.message)?error.message:
      error.status ? `${error.status} - ${error.statusText}` : '服务器出现错误';
    console.log(errMsg);
    return Promise.reject(error.message || error);
  }
  
  //用于接收到响应数据时的相应处理操作（如添加 header等）
  public extractData(data){
    let body = data.json();
    return body || {};
  }

}