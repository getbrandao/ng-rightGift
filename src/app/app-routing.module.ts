import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OauthCallbackComponent } from './validator/oauth-callback/oauth-callback.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'oauth_callback', component: OauthCallbackComponent }
    ]),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
