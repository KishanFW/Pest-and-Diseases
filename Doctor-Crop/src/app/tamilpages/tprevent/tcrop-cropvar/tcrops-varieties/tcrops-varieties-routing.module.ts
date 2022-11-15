import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TcropsVarietiesPage } from './tcrops-varieties.page';

const routes: Routes = [
  {
    path: '',
    component: TcropsVarietiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcropsVarietiesPageRoutingModule {}
