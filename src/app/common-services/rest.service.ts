/*
 * 目前使用 EASYMOCK 网站提供的在线 MOCK 服务进行后端的数据请求 API 模拟。
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'

import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class Rest {

  constructor(private http: HttpClient) { }

  public get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    console.log(url);
    return this.http.get(url, { params })
      .pipe(catchError(this.handleError))
  }

  public post(url: string, body: Object = {}): Observable<any> {
    return this.http.post(url, JSON.stringify(body))
      .pipe(catchError(this.handleError))
  }

  public put(url: string, body: Object = {}): Observable<any> {
    return this.http.put(url, JSON.stringify(body))
      .pipe(catchError(this.handleError))
  }

  public delete(url): Observable<any> {
    return this.http.delete(url)
      .pipe(catchError(this.handleError))
  }

  // 错误处理
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message)
    } else {
      console.error(
        `Backend return code ${error.status}, body was: ${error.error}`
      )
    }

    return throwError('something bad happened; please try again later')
  }
}
