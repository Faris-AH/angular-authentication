
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth.routing';
import { CommonModule } from '../../../node_modules/@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
  ],
  exports: [
    LoginComponent,
    SignupComponent
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  providers: [],
})
export class AuthModule { }
