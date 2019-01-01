import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Good } from '@app/core/model/good'

@Component({
  selector: 'app-good-panel',
  templateUrl: './good-panel.component.html',
  styleUrls: ['./good-panel.component.scss']
})
export class GoodPanelComponent implements OnInit {

  @Input() good: Good

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public handleGoodClick(): void {
    this.router.navigate(['good', this.good.g_id])
  }
}
