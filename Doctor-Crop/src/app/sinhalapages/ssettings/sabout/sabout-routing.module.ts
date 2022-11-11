import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaboutPage } from './sabout.page';

const routes: Routes = [
  {
    path: '',
    component: SaboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaboutPageRoutingModule {}
