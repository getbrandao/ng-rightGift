import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../../service/auth.service';
import { AppComponent } from '../../app.component';

@Component({
  template: '',
  providers: [AuthService]
})
export class OauthCallbackComponent implements OnInit {
  constructor(private _tokenService: Angular2TokenService,
              private auth: AuthService) { }

  ngOnInit() {
    this._tokenService.processOAuthCallback();
    this.auth.afterSocial();
  }
}
