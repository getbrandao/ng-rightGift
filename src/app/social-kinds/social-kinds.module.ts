import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SocialKindsRoutingModule } from './social-kinds-routing.module';
import { SocialKindsComponent } from './social-kinds.component';

@NgModule({
  imports: [
    CommonModule,
    SocialKindsRoutingModule,
    SharedModule
  ],
  declarations: [ SocialKindsComponent ],
  exports: [ SocialKindsComponent ],
  providers: [  ]
})
export class SocialKindsModule { }
