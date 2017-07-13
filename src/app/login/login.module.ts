import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Angular2TokenService } from 'angular2-token';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
  ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ],
  providers: [ Angular2TokenService ]
})
export class LoginModule { }
