import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TbrinjalPage } from './tbrinjal.page';

const routes: Routes = [
  {
    path: '',
    component: TbrinjalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TbrinjalPageRoutingModule {}
