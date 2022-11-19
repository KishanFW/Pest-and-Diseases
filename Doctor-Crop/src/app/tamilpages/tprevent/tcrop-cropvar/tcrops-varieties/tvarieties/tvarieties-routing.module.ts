import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvarietiesPage } from './tvarieties.page';

const routes: Routes = [
  {
    path: '',
    component: TvarietiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvarietiesPageRoutingModule {}
