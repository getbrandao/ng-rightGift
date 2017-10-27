import { Component, OnInit } from '@angular/core';
import { ObjectDataService } from '../service/object-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-social-kinds',
  templateUrl: './social-kinds.component.html',
  styleUrls: ['./social-kinds.component.css'],
  providers: [ ObjectDataService ]
})
export class SocialKindsComponent implements OnInit {
  socialKinds = [];

  constructor(private formBuilder: FormBuilder,
              private objectData: ObjectDataService,
              private _tokenService: Angular2TokenService,
              private router: Router,
              private appcomp: AppComponent) { }

  ngOnInit() {
    if (this.appcomp.isUserSignId) {
      this.objectData.getSocialKinds('social_kinds').subscribe(
        data =>  { this.socialKinds = data.data; },
        error => { this.router.navigate(['/login']); }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

}
