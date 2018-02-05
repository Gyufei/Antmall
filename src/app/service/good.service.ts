import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Cate } from '../classes/good';
import { rest } from '../service/rest.service';

@Injectable()
export class goodService{

  constructor(private rest:rest){}

  public get_index_cate():Promise<Cate[]>{
    return this.rest.get_index_goods().then((res)=> res);
  }

}