import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { CommonComponentsModule } from './common-components/common-components.module'
import { UserModule } from './user/user.module'
import { GoodModule } from './good/good.module'
import { AppRouteingModule } from './app-routeing.module'

import { AppComponent } from './app.component'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonComponentsModule,
    UserModule,
    GoodModule,
    AppRouteingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
