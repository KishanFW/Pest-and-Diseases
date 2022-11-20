import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SbrinjalPage } from './sbrinjal.page';

const routes: Routes = [
  {
    path: '',
    component: SbrinjalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SbrinjalPageRoutingModule {}
