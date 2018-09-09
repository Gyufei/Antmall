import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpModule } from '@angular/http';
import { AppRouteingModule } from './router/app-routeing.module';
import { rest } from './common/rest.service';

import { goodService } from './common/service/good.service';
import { UserService } from './common/service/user.service';
import { AuthGuard } from './common/service/auth-guard.service'
import { CateHover } from './common/directive/cate_hover.directive';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { GoodDetailComponent } from './good-detail/good-detail.component';

import { HeadComponent } from './common/components/head/head.component';
import { FootComponent } from './common/components/foot/foot.component';
import { SearchBarComponent } from './common/components/search-bar/search-bar.component';
import { MiniSearchBarComponent } from './common/components/mini-search-bar/mini-search-bar.component';
import { RegisteredComponent } from './registered/registered.component';

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
    LoginComponent,
    RegisteredComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRouteingModule
  ],
  providers: [
    rest,
    goodService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
