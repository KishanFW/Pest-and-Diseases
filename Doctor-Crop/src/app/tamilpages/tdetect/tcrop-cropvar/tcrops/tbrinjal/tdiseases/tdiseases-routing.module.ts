import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TdiseasesPage } from './tdiseases.page';

const routes: Routes = [
  {
    path: '',
    component: TdiseasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TdiseasesPageRoutingModule {}
