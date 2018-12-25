import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MiniSearchBarComponent } from './mini-search-bar/mini-search-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeadComponent,
    FootComponent,
    SearchBarComponent,
    MiniSearchBarComponent
  ],
  exports: [
    HeadComponent,
    FootComponent,
    SearchBarComponent,
    MiniSearchBarComponent
  ]
})
export class CommonComponentsModule { }
