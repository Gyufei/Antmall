import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public imgArr: string[] = [
    "assets/image/index/car1.jpg",
    "assets/image/index/car2.jpg",
    "assets/image/index/car3.jpg",
    "assets/image/index/car4.jpg"
  ]

  constructor() { }

  ngOnInit() {
  }

}
