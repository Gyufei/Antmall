import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MiniSearchBarComponent } from './mini-search-bar/mini-search-bar.component';

import { rest } from './common/rest.service';
import { goodService } from './common/service/good.service';
import { CateHover } from './common/directive/cate_hover.directive';
import { GoodDetailComponent } from './good-detail/good-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeadComponent,
    FootComponent,
    SearchBarComponent,
    MiniSearchBarComponent,
    CateHover,
    GoodDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [rest,goodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
