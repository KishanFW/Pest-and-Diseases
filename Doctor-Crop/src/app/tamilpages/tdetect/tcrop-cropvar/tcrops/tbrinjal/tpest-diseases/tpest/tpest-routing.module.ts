import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpestPage } from './tpest.page';

const routes: Routes = [
  {
    path: '',
    component: TpestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TpestPageRoutingModule {}
