import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { SocialKindsModule } from './social-kinds/social-kinds.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MydialogComponent } from './material/mydialog.component';
import { OauthCallbackComponent } from './validator/oauth-callback/oauth-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    MydialogComponent,
    OauthCallbackComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    SocialKindsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MydialogComponent
  ]
})
export class AppModule { }
