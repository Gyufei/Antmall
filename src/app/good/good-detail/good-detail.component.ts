import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { GoodDetail } from '@app/core/model/good-detail'
import { GoodService } from '@app/core/services/good.service'


@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.scss']
})
export class GoodDetailComponent implements OnInit {

  public good_detail: GoodDetail
  public img_src_list: any[]
  public big_img_url: string

  constructor(private goodService: GoodService,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.get_good_detail(+params.get('id'))
    )
  }

  public sm_img_hover(data): void {
    this.big_img_url = data.big_img_url;
  }

  public get_good_detail(id: number) {
    return this.goodService.get_good_detail(id).subscribe(res => {
      this.good_detail = res;
      this.img_src_list = res.img_src
      this.big_img_url = res.img_src[0].big_img_url;
    })
  }

}
