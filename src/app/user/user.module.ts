import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { UserRoutingModule } from './user-routing.module'

import { LoginComponent } from './login/login.component'
import { RegisteredComponent } from './registered/registered.component'

@NgModule({
  declarations: [
    LoginComponent,
    RegisteredComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
