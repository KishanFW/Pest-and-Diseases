import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SvarietiesPage } from './svarieties.page';

const routes: Routes = [
  {
    path: '',
    component: SvarietiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SvarietiesPageRoutingModule {}
