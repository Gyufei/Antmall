import { Component, OnInit, Input } from '@angular/core';
import { Cate } from '@app/core/model/good';

@Component({
  selector: 'app-good-row',
  templateUrl: './good-row.component.html',
  styleUrls: ['./good-row.component.scss']
})
export class GoodRowComponent implements OnInit {
  @Input() cate: Cate

  constructor() { }

  ngOnInit() {
  }

}
