import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeadComponent,
    FootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
