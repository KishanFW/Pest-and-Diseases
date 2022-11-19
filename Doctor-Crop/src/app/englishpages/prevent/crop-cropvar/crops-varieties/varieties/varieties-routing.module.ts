import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VarietiesPage } from './varieties.page';

const routes: Routes = [
  {
    path: '',
    component: VarietiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VarietiesPageRoutingModule {}
