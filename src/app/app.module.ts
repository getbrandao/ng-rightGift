import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { SocialKindsModule } from './social-kinds/social-kinds.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MydialogComponent } from './material/mydialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MydialogComponent
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
