import { Injectable, Output, EventEmitter, ViewChild } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { environment} from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { AppComponent} from '../app.component';
import { MdDialog } from '@angular/material';
import { MydialogComponent } from '../material/mydialog.component';

@Injectable()
export class AuthService {

  constructor(private _tokenService: Angular2TokenService,
              private appcomp: AppComponent,
              public mddialog: MdDialog
             ) {
    this._tokenService.init(environment.token_auth_config);
  }

  signIn(login) {
    this._tokenService.signIn(login).subscribe(
      res => {
          console.log('auth response:', res);
          console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
          console.log('auth response body:', res.json()); //log the response body to show the user
          this.appcomp.checkUserSignIn();
        },

        err => {
          if (err.status === 401) {
            this.mddialog.open(MydialogComponent, {
              // data: err.statusText + ': ' + 'user/password invalid!'
              data: 'user/password invalid!',
            });
            // alert(err.statusText + ': ' + 'user/password invalid!');
          }
          console.error('auth error:', err);
          // alert(err.status);
        }
    );
  }

}
