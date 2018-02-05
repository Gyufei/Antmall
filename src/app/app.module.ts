import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MiniSearchBarComponent } from './mini-search-bar/mini-search-bar.component';

import { rest } from './service/rest.service';
import { goodService } from './service/good.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeadComponent,
    FootComponent,
    SearchBarComponent,
    MiniSearchBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [rest,goodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
