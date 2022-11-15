import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpestPage } from './spest.page';

const routes: Routes = [
  {
    path: '',
    component: SpestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpestPageRoutingModule {}
