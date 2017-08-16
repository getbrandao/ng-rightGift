import { Component, OnInit } from '@angular/core';
import { ObjectDataService } from "../service/object-data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-social-kinds',
  templateUrl: './social-kinds.component.html',
  styleUrls: ['./social-kinds.component.css'],
  providers: [ ObjectDataService ]
})
export class SocialKindsComponent implements OnInit {
  socialKinds = [];

  constructor(private formBuilder: FormBuilder, private objectData: ObjectDataService) { }

  ngOnInit() {
    this.objectData.getSocialKinds('social_kinds').subscribe(
      data => {  console.log(data.data);
                 this.socialKinds = data.data;
              },
      error =>    console.log(error)
    );
  }

}
