import { Injectable } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { environment} from "../../environments/environment";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthService {

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init(environment.token_auth_config);
  }

  signIn(login){
    this._tokenService.signIn(login).subscribe(
      res => {
        
          console.log('auth response:', res);
          console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
          console.log('auth response body:', res.json()); //log the response body to show the user 
        },

        err => {
          console.error('auth error:', err);
        }
    );
  }

}
