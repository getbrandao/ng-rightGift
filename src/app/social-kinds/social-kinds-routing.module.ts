import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialKindsComponent } from './social-kinds.component';

const routes: Routes = [
  { path: 'social-kinds', component: SocialKindsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialKindsRoutingModule { }
