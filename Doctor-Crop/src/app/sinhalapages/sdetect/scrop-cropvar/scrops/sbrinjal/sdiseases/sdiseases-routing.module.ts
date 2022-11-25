import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SdiseasesPage } from './sdiseases.page';

const routes: Routes = [
  {
    path: '',
    component: SdiseasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SdiseasesPageRoutingModule {}
