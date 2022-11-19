import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrinjalPage } from './brinjal.page';

const routes: Routes = [
  {
    path: '',
    component: BrinjalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrinjalPageRoutingModule {}
