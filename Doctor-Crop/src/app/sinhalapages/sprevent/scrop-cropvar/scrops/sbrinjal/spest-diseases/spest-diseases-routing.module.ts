import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpestDiseasesPage } from './spest-diseases.page';

const routes: Routes = [
  {
    path: '',
    component: SpestDiseasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpestDiseasesPageRoutingModule {}
