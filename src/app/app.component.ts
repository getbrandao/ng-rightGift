import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isUserSignId: Boolean = false;

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init(environment.token_auth_config);
  }

  ngOnInit() {
    this.checkUserSignIn();
  }

  checkUserSignIn() {
    if (this._tokenService.userSignedIn()) {
      this.isUserSignId = true;
    }
  }

}

