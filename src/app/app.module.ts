import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MiniSearchBarComponent } from './mini-search-bar/mini-search-bar.component';

import { rest } from './common/service/rest.service';
import { goodService } from './common/service/good.service';
import { CateHover } from './common/directive/cate_hover.directive';
import { Mock } from './common/mock/good_mock';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeadComponent,
    FootComponent,
    SearchBarComponent,
    MiniSearchBarComponent,
    CateHover,
  ],
  imports: [
    BrowserModule
  ],
  providers: [rest,goodService,Mock],
  bootstrap: [AppComponent]
})
export class AppModule { }
