/*
 * 此指令用于首页轮播图侧边的鼠标Hover事件时背景改变
*/

import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector:'[cateHover]'
})

export class CateHover{
  constructor(private el:ElementRef, private renderer:Renderer){};

  @HostListener('mouseenter') 
  hasEnter(){
    this.highlight('white')
    console.log(this.el);
  }
  @HostListener('mouseleave')
  hasLeave(){
    this.highlight(null)
  }

  highlight(color:string){
    this.renderer.setElementStyle(this.el.nativeElement,'backgroundColor',color)
  }
}