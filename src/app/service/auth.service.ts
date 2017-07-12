import { Injectable } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../../environments/environment";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthService {

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiBase: 'http://localhost:3000'
    });

    this._tokenService.signIn({});
  }
}
